'use strict'

const quoteAuthorTxt = document.querySelector('.quote-author');
const quoteTxt = document.querySelector('.quote-text');
const container = document.querySelector('.container');
const getQuoteBtn = document.querySelector('.get-quote-btn');

const API = 'https://api.quotable.io/random';

async function getRandomQuotes() {
    const res = await fetch(API);
    const res_data = await res.json();

    const { author, content } = res_data;

    quoteAuthorTxt.textContent = author;
    quoteTxt.textContent = content;

    container.style.display = 'block';
}

getQuoteBtn.addEventListener('click', getRandomQuotes);