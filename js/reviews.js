const reviews = [
  {
    id: 1,
    site: "Study Zone",
    rating: 4,
    review:
      "James delivered an exceptional application with The Study Zone site. The design is sleek and modern, which is a testament to his expertise. Now, I have all my favorite lofi stations in one place, making study sessions more enjoyable. James' attention to detail and commitment to user satisfaction was very noticeable, and the delivered project showcased such.",
  },
  {
    id: 2,
    site: "Art Listing",
    rating: 5,
    review:
      "The art listing site is an invaluable tool for artists. It simplifies the process of listing and managing my artwork, and the design is visually appealing. The project was delivered promptly, and I am highly satisfied with the outcome.",
  },
  {
    id: 3,
    site: "Mobile App Moonrise",
    rating: 3,
    review:
      "Working with James during the development of Moonrise was a great experience. He was professional and transparent throughout the process, providing regular updates and addressing all my requirements. Moonrise perfectly fits my needs for tracking and enhancing my sleep. It was delivered on time, and the design is smooth, intuitive, and fits the mood well. I'm highly satisfied with its performance and its ability to address my sleep-related needs.",
  },
];

const reviewsContainer = document.getElementById("reviews");

reviews.forEach((review) => {
  const reviewDiv = document.createElement("div");
  reviewDiv.classList.add("box"); // Add a class to apply styles
  reviewDiv.innerHTML = `
    <h3 style="
      font-size: 1.125rem;
      font-family: 'Your Font Family', sans-serif;
      color: #333;
      border-bottom: 2px solid #fff;
      margin-bottom: 10px;
      display: inline;
      color: #13bbff
    ">${review.site}</h3>
    <p style="
      color: #fff">${review.review}</p>
  `;
  reviewsContainer.appendChild(reviewDiv);
});
