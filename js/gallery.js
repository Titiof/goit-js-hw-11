import Notiflix from 'notiflix';
import { galleryTemplate } from "./template";
import { PixabayAPI, axios } from './axios';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const refs = {
    formEL: document.querySelector('#form'),
    galleryList: document.querySelector('.gallery'),
    loader: document.querySelector('.loader'),
}