import api from './api-helper';
import React from 'react';
import axios from 'axios';


export const getAllReviews = async () => {
  const resp = await api.get(`/reviews`);
  return resp.data;
}

export const postReview = async (reviewData) => {
  const resp = await api.post('/reviews', { review: reviewData });
  return resp.data;
}

export const putReview = async (id, reviewData) => {
  const resp = await api.put(`/reviews/${id}`, { review: reviewData });
  return resp.data;
}

export const deleteReview = async (id) => {
  const resp = await api.delete(`/reviews/${id}`);
  return resp;
}
