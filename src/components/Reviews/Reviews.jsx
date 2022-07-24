import { getMovieReviewsById } from 'API/moviesAPI';
import { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import {
  Section,
  ReviewsList,
  ReviewsItem,
  AuthorName,
  ContentReview,
} from './Reviews.styled';

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
    <Section>
      {reviews.length > 0 ? (
        <ReviewsList>
          {reviews.map(({ author, id, content }) => {
            return (
                <ReviewsItem key={id}>
                  <AuthorName>Author: {author}</AuthorName>
                  <ContentReview>{content}</ContentReview>
                </ReviewsItem>
            );
          })}
        </ReviewsList>
      ) : (
        <p>We don't have any reviews</p>
      )}
    </Section>
  );
};
export default Reviews;

Reviews.propTypes = {
  id: PropTypes.string.isRequired,
};
