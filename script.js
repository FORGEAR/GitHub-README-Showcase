document.addEventListener("DOMContentLoaded", function () {
    // Assuming you have JSON data in a file named 'data.json'
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const cardContainer = document.getElementById('card-container');

            data.forEach(item => {
                const card = document.createElement('div');
                card.classList.add('col-lg-3');
                card.innerHTML = `
                    <div class="card mb-4">
                        <div class="face front-face">
                            <img src="${item.Img_URL}" alt="" class="profile">
                            <div class="pt-3 text-uppercase name">
                                ${item.GitHub_Name}
                            </div>
                        </div>
                        <div class="face back-face">
                            <span class="fas fa-quote-left"></span>
                            <a class="btn btn-primary" href="${item.GitHub_profile}" role="button">
                                View Profile
                            </a>
                            <span class="fas fa-quote-right"></span>
                        </div>
                    </div>
                `;
                cardContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
