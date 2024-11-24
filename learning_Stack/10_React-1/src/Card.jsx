function Card({ subtitle, title, image, description }) {
  return (
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src={image} alt="Placeholder image" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{title}</p>
            <p class="subtitle is-6">{subtitle}</p>
          </div>
        </div>

        <div class="content">{description}</div>
      </div>
    </div>
  );
}

export default Card;
