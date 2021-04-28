import api from './api-helper';
import React from 'react';
import axios from 'axios';


export const getAllBooks = async () => {
  const resp = await api.get(`/books`);
  return resp.data;
}

export const getOneBooks = async (id) => {
  const resp = await api.get(`/books/${id}`);
  return resp.data;
}

