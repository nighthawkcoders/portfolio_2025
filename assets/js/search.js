(function (window, document) {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    const historyContainer = document.querySelector('.history-container');
    const searchResults = document.querySelector('.search-results-wrap');
    
    // Initialize search history from localStorage
    let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    
    // Function to update search history in localStorage
    function updateSearchHistory(query) {
      // Don't add empty queries or duplicates
      if (!query.trim() || searchHistory.includes(query)) return;
      
      // Add the new query to the beginning of the array
      searchHistory.unshift(query);
      
      // Keep only the 10 most recent searches
      if (searchHistory.length > 10) {
        searchHistory = searchHistory.slice(0, 10);
      }
      
      // Save to localStorage
      localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
      
      // Update the display
      renderSearchHistory();
    }
    
    // Function to render search history
    function renderSearchHistory() {
      historyContainer.innerHTML = '';
      
      if (searchHistory.length === 0) {
        historyContainer.innerHTML = '<div class="history-empty">No search history yet</div>';
        return;
      }
      
      searchHistory.forEach(item => {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        historyItem.innerHTML = `
          <div class="history-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            </svg>
          </div>
          ${item}
        `;
        
        historyItem.addEventListener('click', function() {
          searchInput.value = item;
          initiateSearch(item);
          historyContainer.style.display = 'none';
        });
        
        historyContainer.appendChild(historyItem);
      });
      
      // Add "Clear History" button
      const clearHistory = document.createElement('div');
      clearHistory.className = 'clear-history';
      clearHistory.textContent = 'Clear Search History';
      clearHistory.addEventListener('click', function(e) {
        e.stopPropagation();
        searchHistory = [];
        localStorage.removeItem('searchHistory');
        renderSearchHistory();
        historyContainer.style.display = 'none';
      });
      
      historyContainer.appendChild(clearHistory);
    }
    
    // Load the search data
    let searchData;
    let searchIndex;

    function loadSearchData() {
      var request = new XMLHttpRequest();
      request.open('GET', '/assets/js/search-data.json', true);
      
      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          searchData = JSON.parse(request.responseText);
          
          // Initialize lunr index
          searchIndex = lunr(function() {
            this.ref('id');
            this.field('title', { boost: 200 });
            this.field('content', { boost: 2 });
            this.field('url');
            this.metadataWhitelist = ['position'];
            
            for (var i in searchData) {
              this.add({
                id: i,
                title: searchData[i].title,
                content: searchData[i].content,
                url: searchData[i].url
              });
            }
          });
        } else {
          console.log('Error loading search data: ' + request.status);
        }
      };
      
      request.onerror = function() {
        console.log('Connection error while loading search data');
      };
      
      request.send();
    }

    // Initial data load
    loadSearchData();

    // Function to perform the actual search
    function initiateSearch(query) {
      if (!query.trim()) return;
      
      // Add to history
      updateSearchHistory(query);
      
      // Add animation to search button
      if (searchBtn) {
        searchBtn.classList.add('search-animation');
        setTimeout(() => searchBtn.classList.remove('search-animation'), 1000);
      }
      
      // Clear previous results
      searchResults.innerHTML = '';
      
      // Perform search with lunr
      if (!searchIndex) {
        searchResults.innerHTML = '<p class="search-no-results">Search index is loading, please try again in a moment.</p>';
        return;
      }
      
      const results = searchIndex.query(function(q) {
        const tokens = lunr.tokenizer(query);
        q.term(tokens, { boost: 10 });
        q.term(tokens, { wildcard: lunr.Query.wildcard.TRAILING });
      });
      
      if (results.length === 0) {
        searchResults.innerHTML = '<p class="search-no-results">No results found for "' + query + '"</p>';
        return;
      }
      
      // Display results
      const resultsList = document.createElement('ul');
      resultsList.className = 'search-results-list';
      searchResults.appendChild(resultsList);
      
      results.forEach(function(result) {
        const doc = searchData[result.ref];
        
        const listItem = document.createElement('li');
        listItem.className = 'search-results-list-item';
        
        const resultLink = document.createElement('a');
        resultLink.className = 'search-result';
        resultLink.href = doc.relUrl;
        
        const resultTitle = document.createElement('div');
        resultTitle.className = 'search-result-title';
        resultTitle.innerHTML = doc.title + '<span class="search-result-rel-date">' + doc.date + '</span>';
        
        const resultPreview = document.createElement('div');
        resultPreview.className = 'search-result-preview';
        
        // Create a preview with ellipses and highlight matches
        let content = doc.content;
        const index = content.toLowerCase().indexOf(query.toLowerCase());
        
        if (index !== -1) {
          const start = Math.max(0, index - 100);
          const end = Math.min(content.length, index + query.length + 100);
          
          let preview = content.substring(start, end);
          
          if (start > 0) preview = '... ' + preview;
          if (end < content.length) preview += ' ...';
          
          // Highlight the query term
          const regex = new RegExp('(' + query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + ')', 'gi');
          preview = preview.replace(regex, '<span class="search-result-highlight">$1</span>');
          
          resultPreview.innerHTML = preview;
        } else {
          // If the query isn't found directly, just show the beginning of the content
          resultPreview.innerHTML = content.substring(0, 200) + ' ...';
        }
        
        resultLink.appendChild(resultTitle);
        resultLink.appendChild(resultPreview);
        listItem.appendChild(resultLink);
        resultsList.appendChild(listItem);
      });
    }
    
    // Event listeners
    if (searchInput) {
      searchInput.addEventListener('focus', function() {
        renderSearchHistory();
        if (searchHistory.length > 0) {
          historyContainer.style.display = 'block';
        }
      });
      
      searchInput.addEventListener('input', function() {
        if (this.value.trim() !== '') {
          renderSearchHistory();
          historyContainer.style.display = 'block';
        } else {
          historyContainer.style.display = 'none';
        }
      });
      
      searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
          initiateSearch(this.value);
          historyContainer.style.display = 'none';
        }
      });
    }
    
    if (searchBtn) {
      searchBtn.addEventListener('click', function() {
        initiateSearch(searchInput.value);
        historyContainer.style.display = 'none';
      });
    }
    
    // Close history when clicking outside
    document.addEventListener('click', function(e) {
      if (historyContainer && !historyContainer.contains(e.target) && e.target !== searchInput) {
        historyContainer.style.display = 'none';
      }
    });
    
    // Initial render of search history
    if (historyContainer) {
      renderSearchHistory();
    }
  });

})(window, document);