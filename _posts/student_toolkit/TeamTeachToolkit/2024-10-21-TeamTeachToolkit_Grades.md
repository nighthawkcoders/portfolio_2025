---
toc: true
layout: post
title: Team Teach Grades and Comments
description: Grades and comments for team teaching
permalink: /student/TeamTeachToolkit/teaching-grades

---

<style>
  select {
    padding: 8px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: #f8f8f8;
    cursor: pointer;
  }
  select:hover {
    background-color: #e8e8e8;
  }
</style>

<style>
  select {
    padding: 8px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: #f8f8f8;
    cursor: pointer;
  }
  select:hover {
    background-color: #e8e8e8;
  }
</style>

<div>
  <h3>Team Teach Grades</h3>
  <label for="teamTeachTopic">Select Team Teach Topic:</label>
  <select id="teamTeachTopic">
    <option value="Topic 1">Calculator Enactment</option>
    <option value="Topic 2">Big O Notation</option>
    <option value="Topic 3">Topic 3</option>
    <option value="Topic 4">Topic 4</option>
  </select>
  <table>
    <thead>
      <tr>
        <th>Student Name</th>
        <th>Grade</th>
        <th>Comments</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Student 1</td>
        <td>0.9</td>
        <td rowspan="5">
          Comment 1
        </td>
      </tr>
      <tr>
        <td>Student 2</td>
        <td>0.91</td>
      </tr>
      <tr>
        <td>Student 3</td>
        <td>0.9</td>
      </tr>
      <tr>
        <td>Student 4</td>
        <td>0.92</td>
      </tr>
      <tr>
        <td>Student 5</td>
        <td>0.91</td>
      </tr>
    </tbody>
  </table>
</div>