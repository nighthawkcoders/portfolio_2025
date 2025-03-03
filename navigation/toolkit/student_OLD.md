---
layout: post
title: Student Toolkit
description:
permalink: /STUDENT_DEPRECATED
menu: nav/homejava.html
show_reading_time: false
---

<div class="container">
    <div class="bathroom glow-on-hover-search" onclick="location.href='{{site.baseurl}}/bathroom';"
        style="cursor: pointer;">
        <div class="bathroom-image">
            <img src="{{site.baseurl}}/images/toolkit-nav-buttons/bathroom.png" alt="Bathroom" />
        </div>
        <div class="bathroom-details">
            <h3>Bathroom</h3>
            <p>This tool lets you:</p>
            <ul>
                <li>Add yourself to a queue to go to the bathroom</li>
                <li>Track how many people have already left the class to go to the bathroom</li>
                <li>Report issues with any bathroom</li>
                <li>Track your bathroom statistics</li>
            </ul>
        </div>
    </div>
    <div class="screen-queue glow-on-hover-search" onclick="location.href='{{site.baseurl}}/student-toolkit/queue';"
        style="cursor: pointer;">
        <div class="screen-queue-image">
            <img src="{{site.baseurl}}/images/toolkit-nav-buttons/group-chat.png" alt="ScreenQueue" />
        </div>
        <div class="screen-queue-details">
            <h3>Screen Queue</h3>
            <p>This tool lets you:</p>
            <ul>
                <li>Add yourself to a queue to present to the teacher</li>
                <li>Track who is not waiting to go to present</li>
                <li>Track who is waiting to go to present</li>
                <li>Track who has already presented</li>
            </ul>
        </div>
    </div>
    <div class="submissions glow-on-hover-search" onclick="location.href='{{site.baseurl}}/student/submissions';"
        style="cursor: pointer;">
        <div class="submissions-image">
            <img src="{{site.baseurl}}/images/toolkit-nav-buttons/submissions.png" alt="Submissions" />
        </div>
        <div class="submissions-details">
            <h3>Assignment Submissions</h3>
            <p>This tool lets you:</p>
            <ul>
                <li>Submit an assignment directly to the teacher</li>
                <li>Write special comments on your assignment submission</li>
            </ul>
        </div>
    </div>
    <div class="seed-tracker glow-on-hover-search" onclick="location.href='{{site.baseurl}}/student/seedtracker';"
        style="cursor: pointer;">
        <div class="seed-tracker-image">
            <img src="{{site.baseurl}}/images/toolkit-nav-buttons/seedtracker.png" alt="Seed Tracker" />
        </div>
        <div class="seed-tracker-details">
            <h3>Seed Tracker</h3>
            <p>This tool lets you:</p>
            <ul>
                <li>Request seed</li>
            </ul>
        </div>
    </div>
    <div class="sagai glow-on-hover-search" onclick="location.href='{{site.baseurl}}/student/TeamTeachToolkit';"
        style="cursor: pointer;">
        <div class="sagai-image">
            <img src="{{site.baseurl}}/images/toolkit-nav-buttons/sagai.png" alt="TeamTeachToolkit" />
        </div>
        <div class="sagai-details">
            <h3>Team Teach Toolkit</h3>
            <p>This tool lets you:</p>
            <ul>
                <li>Use an AI that can grade and provide feedbacks on homework hacks</li>
                <li>Use an AI that can generate MC or FRQ hacks based on a unit</li>
                <li>Use a review page to go over covered topics during team teaches</li>
            </ul>
        </div>
    </div>
    <div class="view-grades glow-on-hover-search" onclick="location.href='{{site.baseurl}}/student/view-grades';"
        style="cursor: pointer;">
        <div class="view-grades-image">
            <img src="{{site.baseurl}}/images/toolkit-nav-buttons/view-grades.png" alt="view-grades" />
        </div>
        <div class="view-grades-details">
            <h3>View Grades</h3>
            <p>This tool lets you:</p>
            <ul>
                <li>View your grades per assignment</li>
            </ul>
        </div>
    </div>
</div>

<style>
    .container {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto auto auto auto auto auto;
        gap: 30px 0px;
        grid-auto-flow: row;
        grid-template-areas:
            "bathroom"
            "screen-queue"
            "submissions"
            "seed-tracker"
            "sagai"
            "view-grades";
    }

    .bathroom {
        display: grid;
        grid-template-columns: 150px 1fr;
        grid-template-rows: auto;
        gap: 0px 0px;
        grid-auto-flow: row;
        grid-template-areas:
            "bathroom-image bathroom-details";
        grid-area: bathroom;
    }

    .bathroom-image {
        grid-area: bathroom-image;
        display: flex;
        align-items: center;
        background-color: white;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }

    .bathroom-details {
        padding: 10px;
        grid-area: bathroom-details;
    }

    .screen-queue {
        display: grid;
        grid-template-columns: 150px 1fr;
        grid-template-rows: auto;
        gap: 0px 0px;
        grid-auto-flow: row;
        grid-template-areas:
            "screen-queue-image screen-queue-details";
        grid-area: screen-queue;
    }

    .screen-queue-image {
        grid-area: screen-queue-image;
        display: flex;
        align-items: center;
        background-color: white;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }

    .screen-queue-details {
        padding: 10px;
        grid-area: screen-queue-details;
    }

    .submissions {
        display: grid;
        grid-template-columns: 150px 1fr;
        grid-template-rows: auto;
        gap: 0px 0px;
        grid-auto-flow: row;
        grid-template-areas:
            "submissions-image submissions-details";
        grid-area: submissions;
    }

    .submissions-image {
        grid-area: submissions-image;
        display: flex;
        align-items: center;
        background-color: white;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }

    .submissions-details {
        padding: 10px;
        grid-area: submissions-details;
    }

    .seed-tracker {
        display: grid;
        grid-template-columns: 150px 1fr;
        grid-template-rows: auto;
        gap: 0px 0px;
        grid-auto-flow: row;
        grid-template-areas:
            "seed-tracker-image seed-tracker-details";
        grid-area: seed-tracker;
    }

    .seed-tracker-image {
        grid-area: seed-tracker-image;
        display: flex;
        align-items: center;
        background-color: white;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }

    .seed-tracker-details {
        padding: 10px;
        grid-area: seed-tracker-details;
    }

    .sagai {
        display: grid;
        grid-template-columns: 150px 1fr;
        grid-template-rows: auto;
        gap: 0px 0px;
        grid-auto-flow: row;
        grid-template-areas:
            "sagai-image sagai-details";
        grid-area: sagai;
    }

    .sagai-image {
        grid-area: sagai-image;
        display: flex;
        align-items: center;
        background-color: white;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }

    .sagai-details {
        padding: 10px;
        grid-area: sagai-details;
    }

    .view-grades {
        display: grid;
        grid-template-columns: 150px 1fr;
        grid-template-rows: auto;
        gap: 0px 0px;
        grid-auto-flow: row;
        grid-template-areas:
            "view-grades-image view-grades-details";
        grid-area: view-grades;
    }

    .view-grades-image {
        grid-area: view-grades-image;
        display: flex;
        align-items: center;
        background-color: white;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }

    .view-grades-details {
        padding: 10px;
        grid-area: view-grades-details;
    }

    .glow-on-hover-search {
        border: none;
        outline: none;
        color: #fff;
        background: #1e1e1e;
        cursor: pointer;
        position: relative;
        z-index: 0;
        border-radius: 10px;
    }

    .glow-on-hover-search:before {
        content: '';
        background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
        position: absolute;
        top: -2px;
        left: -2px;
        background-size: 400%;
        z-index: -1;
        filter: blur(5px);
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        animation: glowing 20s linear infinite;
        opacity: 0;
        transition: opacity .3s ease-in-out;
        border-radius: 10px;
    }

    .glow-on-hover-search:hover:before {
        opacity: 1;
    }

    .glow-on-hover-search:after {
        z-index: -1;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: #1e1e1e;
        left: 0;
        top: 0;
        border-radius: 10px;
    }

    @keyframes glowing {
        0% {
            background-position: 0 0;
        }

        50% {
            background-position: 400% 0;
        }

        100% {
            background-position: 0 0;
        }
    }

    img {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }

    h3 {
        margin-top: 0px !important;
        padding-top: 0px !important;
    }
</style>
