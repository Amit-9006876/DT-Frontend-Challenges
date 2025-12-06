// Full JSON provided (trimmed ONLY of unused Mongo/meta props in UI)
const topic = {
    "category": "Course",
    "commitment": "4 hours",
    "commitment_type": "custom",
    "deadline": "",
    "description": "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
    "learning_outcomes": [
        "Bare minimum knowledge of project management",
        "4SA Concept",
        "Would be able to handle any project efficiently"
    ],
    "pre_requisites": [
        "An open mind to learn any concept",
        "Thought of Unlearning and Relearning "
    ],
    "project_image": "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1114276/0413_What_is_a_Technical_Project_Manager_Luke_Social-21e35c2d76465934c0f844c396db762a.png",
    "short_description": "You can learn project management by applying the simple methods of project management. How you can apply project management in each and every step of your deliverables? Let's figure it out together",
    "title": "Technical Project Management",
    "tasks": [
        {
            "task_id": 18882,
            "task_title": "Explore the world of management",
            "task_description": "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
            "status": "notworkyet",
            "assets": [
                {
                    "asset_id": 18883,
                    "asset_title": "Technical Project Management",
                    "asset_description": "Story of Alignment\r\nScope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n\r\n",
                    "asset_content": " https://www.youtube.com/embed/TiMRwri1xJ8",
                    "asset_type": "display_asset",
                    "asset_content_type": "video"
                },
                {
                    "asset_id": 18884,
                    "asset_title": "Threadbuild",
                    "asset_description": "Watch the video and thread build, and jot out key threads while watching that video.",
                    "asset_content": " ",
                    "asset_type": "input_asset",
                    "asset_content_type": "threadbuilder"
                },
                {
                    "asset_id": 18885,
                    "asset_title": "Structure you pointers ",
                    "asset_description": "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
                    "asset_content": " ",
                    "asset_type": "input_asset",
                    "asset_content_type": "article"
                },
                {
                    "asset_id": 18886,
                    "asset_title": "4SA Method",
                    "asset_description": "To explore more read more",
                    "asset_content": " https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
                    "asset_type": "display_asset",
                    "asset_content_type": "article"
                }
            ]
        }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const task = topic.tasks[0];

    // ---------- DATA FEED KIYE H ----------
    document.getElementById('courseTitle').textContent = topic.title; 
    document.getElementById('taskHeader').textContent = task.task_title; 
    document.getElementById('courseDescription').textContent = task.task_description;

    // ---------- CARDS ----------
    const cardsContainer = document.getElementById('cardsContainer');
    // 4 CARD KO EK EK BAR KARKE
    task.assets.forEach(asset => {
        const card = document.createElement('div');
        card.className = 'card';

        // --- Card Header Strip ---
        const strip = document.createElement('div');
        strip.className = 'card-header-strip';
        
        const header = document.createElement('div');
        header.className = 'card-header';
        header.innerHTML = `
            <div class="card-title">${asset.asset_title}</div>
            <div class="card-info">i</div>
        `;
        strip.appendChild(header);
        card.appendChild(strip);
        // ------------------------------------------

        const desc = document.createElement('p');
        desc.className = 'card-description';
        desc.textContent =`Description : ${asset.asset_description.trim()}`
        card.appendChild(desc);

        // Render by type
        if (asset.asset_content_type === 'video' && asset.asset_type === 'display_asset') {
            const videoWrapper = document.createElement('div');
            videoWrapper.className = 'video-wrapper';

            const iframe = document.createElement('iframe');
            iframe.src = asset.asset_content.trim();
            iframe.allowFullscreen = true;
            videoWrapper.appendChild(iframe);
            card.appendChild(videoWrapper);
        }

        else if (asset.asset_content_type === 'threadbuilder' && asset.asset_type === 'input_asset') {
            // Placeholder rendering for Threadbuild card
            card.innerHTML += `
                <div class="thread-label">Thread A</div>
                <input type="text" placeholder="Sub thread 1">
                <input type="text" placeholder="Sub thread 2">
                <button class="add-subthread-btn">+ Sub thread</button>
                <textarea placeholder="Summary for Thread A"></textarea>
            `;
        }

        else if (asset.asset_content_type === 'article' && asset.asset_type === 'input_asset') {
            // Placeholder rendering for Article input card
            card.innerHTML += `
                <input type="text" placeholder="Title">
                <textarea placeholder="Write your article (400-500 words)..."></textarea>
            `;
        }

        else if (asset.asset_content_type === 'article' && asset.asset_type === 'display_asset') {
            // Placeholder rendering for 4SA Method card
            card.innerHTML += `
                <div class="section-box">
                    <div class="section-title">Read Article</div>
                    <div class="section-text">
                        Open the article to explore more using the 4SA Method.
                    </div>
                </div>
                <a href="${asset.asset_content.trim()}" target="_blank" style="font-size: 12px; margin-top: 8px; color: #2c7dff; text-decoration: none;">Open resource</a>
            `;
        }

        cardsContainer.appendChild(card);
    });

    // ---------- JOURNEY POPUP CONTENT ----------
    const journeyList = document.getElementById('journeyList');
    journeyList.innerHTML = '';

    // First list item: main task
    const mainLi = document.createElement('li');
    mainLi.textContent = task.task_title;
    mainLi.classList.add('active'); // Keep the first item active
    journeyList.appendChild(mainLi);

    // Then all asset titles
    task.assets.forEach(asset => {
        const li = document.createElement('li');
        li.textContent = asset.asset_title;
        journeyList.appendChild(li);
    });

    // ---------- POPUP/SIDEBAR TOGGLE LOGIC ----------
    const journeyTrigger = document.getElementById('journeyTrigger');
    const journeyBoard = document.getElementById('journeyBoard');
    const noticeBoard = document.getElementById('noticeBoard'); // Defined here for scope
    const journeyClose = document.getElementById('journeyClose');
    const noticeTrigger = document.getElementById('noticeTrigger');
    const noticeClose = document.getElementById('noticeClose');

    journeyTrigger.addEventListener('click', () => {
        // Close NOTICE BORD AGAR OPEN
        if (noticeBoard.classList.contains('open')) {
            noticeBoard.classList.remove('open');
        }
        journeyBoard.classList.toggle('open');
    });

    journeyClose.addEventListener('click', () => {
        journeyBoard.classList.remove('open');
    });


    noticeTrigger.addEventListener('click', () => {
        // Close JORNEY BOX AGAR OPEN HAI TOH
        if (journeyBoard.classList.contains('open')) {
            journeyBoard.classList.remove('open');
        }
        noticeBoard.classList.toggle('open');
    });

    noticeClose.addEventListener('click', () => {
        noticeBoard.classList.remove('open');
    });

    document.addEventListener("click", function (event) {

    const clickedInsideNotice = noticeBoard.contains(event.target);
    const clickedNoticeTrigger = noticeTrigger.contains(event.target);

    // If clicked outside both the panel and the trigger → close panel
    if (!clickedInsideNotice && !clickedNoticeTrigger) {
        noticeBoard.classList.remove("open");
    }
});

document.addEventListener("click", function (event) {

    const clickedInsideJourney = journeyBoard.contains(event.target);
    const clickedJourneyTrigger = journeyTrigger.contains(event.target);

    // If clicked outside the journey board and its trigger → close it
    if (!clickedInsideJourney && !clickedJourneyTrigger) {
        journeyBoard.classList.remove("open");
    }
});


});