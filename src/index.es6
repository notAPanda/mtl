import './style.scss';
import data from './data.json';
import template from './category/category.handlebars';

const mtl = document.getElementById('mtl');

mtl.innerHTML = template(data);