Technical Project Management – Dynamic Asset Rendering

This project contains the solution for Task 1 and Task 2 of the DeepThought Frontend Assignment.
The goal was to build a reusable, dynamic, and fully interactive UI using HTML, CSS, and Vanilla JavaScript without any backend or server.

 Task 1 – UI Development

In the first task, the requirement was to recreate the given Figma-based UI layout using pure HTML and CSS.

What was built

1.A clean navbar with icons

2.A page layout containing:

3.Journey Board toggle panel

4.Notice Board toggle panel

5.Main content area

6.Card containers for different types of assets

7.Floating action buttons

8.A responsive grid layout for all asset cards

9.The base UI matches the provided reference design

10.No frameworks were used — everything is written in plain HTML and CSS.

 Task 2 – Dynamic Functionality

Task 2 focused on turning the static UI from Task 1 into a dynamic, data-driven page.

We were given a local JSON representing one project → one task → multiple assets.

Key Requirements Achieved

1.The entire content of the page is filled using JSON data only

2.No hardcoded values for titles, descriptions, videos, etc.

3.A reusable asset container is created in JavaScript

4.A loop renders all assets using the same template function

5.Support for multiple asset types:

6.Video asset (embedded player)

7.Threadbuilder input form

8.Article input form

9.External resource link

10.Each asset's description can expand/collapse with an arrow animation

11.Journey Board and Notice Board open/close smoothly

12.Clicking outside these panels closes them (event listeners added)

13.Panels do not interfere with each other

14.This way, the UI becomes fully dynamic without running a backend server.
