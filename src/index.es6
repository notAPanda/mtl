import './style.scss';
import data from './data.json';
import categories from './templates/category.handlebars';

const mtl = document.getElementById('mtl');
mtl.innerHTML = categories(data);
