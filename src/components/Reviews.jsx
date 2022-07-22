import { getMovieReviewsById } from 'API/moviesAPI';
import { useEffect, useState } from 'react';

const Reviews = ({ id }) => {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getMovieReviewsById(id)
      .then(data => setReviews(data.results))
      .catch(`Error`);
  }, [id]);

  if (!reviews) {
    return;
  }

  return (
    <>
      {reviews.length > 0 ? (
        reviews.map(({ author, id, content }) => {
          return (
            <ul key={id}>
              <li >
                <p>Author: {author}</p>
              </li>
              <p>{content}</p>
            </ul>
          );
        })
      ) : (
        <p>We don't have any reviews</p>
      )}
    </>
  );
};
export default Reviews;
