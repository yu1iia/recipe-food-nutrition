import recipeCard from '../templates/recipeCard.hbs';
import ApiService from './apiService';
import * as basicLightbox from 'basiclightbox';
import { alert, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import { defaults } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import { Stack } from '@pnotify/core';

defaults.styling = 'brighttheme';
defaults.icons = 'brighttheme';

defaultModules.set(PNotifyMobile, {});

const galleryContainerRef = document.querySelector(`.gallery`);
const searchFormRef = document.querySelector('.search-form');
const anchorRef = document.querySelector('.anchor');

const newApiServise = new ApiService();

const observer = new IntersectionObserver(observerCallback, {
  rootMargin: '0px',
  threshold: 0,
});
