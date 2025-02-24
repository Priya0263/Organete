let currentIndex = 0;

function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
}

function startQuiz() {
    alert("Starting eligibility quiz...");
    // Implement quiz logic here
}

document.getElementById('donorForm').onsubmit = function(e) {
    e.preventDefault();
    alert("Thank you for registering as a donor!");
    // Handle form submission logic here
};

document.getElementById('newsletterForm').onsubmit = function(e) {
    e.preventDefault();
    alert("Thank you for subscribing!");
    // Handle newsletter subscription logic here
};

// Simulate impact counter
let livesSaved = 0;
setInterval(() => {
    livesSaved++;
    document.getElementById('counter').innerText = `${livesSaved} Lives Saved`;
}, 1000);

function openChat() {
    alert("Live Chat Feature is coming soon!");
}

function showSlide(index) {
    const stories = document.querySelectorAll('.story');
    stories.forEach((story, i) => {
        story.style.transform = `translateX(${(i - index) * 100}%)`;
    });
}

function nextSlide() {
    const stories = document.querySelectorAll('.story');
    currentIndex = (currentIndex + 1) % stories.length;
    showSlide(currentIndex);
}

function prevSlide() {
    const stories = document.querySelectorAll('.story');
    currentIndex = (currentIndex - 1 + stories.length) % stories.length;
    showSlide(currentIndex);
}

showSlide(currentIndex);
