// TASK 5
import animatedScroll from './modules/animatedScroll.js';

window.onscroll = function() {
  animatedScroll.init();
};

// TASK 6
import accordeon from './modules/accordeon.js';

accordeon.init();

// TASK 7
import slider from './modules/slider.js';

slider.init();

// TASK 8
import modalWindow from './modules/modalWindow.js';

modalWindow.init();

// // task 9
// import fetch from './modules/fetch';
//
// fetch.init();

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let counting = 0;

const getBlogs = () => {
  fetch('http://localhost:3000/api/blogs')
      .then((response) => response.json())
      .then((data) => {
        let blogsArr = data.blogs;

        blogsArr.forEach((e) => {
          const keysObj = {
            title: e.title,
            description: e.description,
            comments: e.comments,
            watched: e.watched,
            previewImg: e.previewImg,
            published: e.published,
          };
          const date = new Date(keysObj.published).getDate();
          const month = monthNames[new Date(keysObj.published).getMonth()];
          const year = new Date(keysObj.published).getFullYear();

          counting++;

          document.getElementById('blogElem').innerHTML += '<div class="flex-column main__blog-article">\n' +
          '              <div class="main__blog-article-description">\n' +
          '                <div class="main__blog-photo">\n' +
          '                  <a href="#"><img src="' + keysObj.previewImg + '" alt="desk" class="main__blog-photo-img"></a>\n' +
          '                  <div class="flex-column main__blog-calendar">\n' +
          '                    <span>' + date + '</span>\n' +
          '                    <span>' + month + '</span>\n' +
          '                  </div>\n' +
          '                </div>\n' +
          '                <h6>' + keysObj.title + '</h6>\n' +
          '                <p class="main__blog-description">' + keysObj.description + '</p>\n' +
          '              </div>\n' +
          '              <div class="main__blog-article-viewing">\n' +
          '                <i class="far fa-eye"></i>\n' +
          '                <span>' + keysObj.watched + '</span>\n' +
          '                <i class="far fa-envelope"></i>\n' +
          '                <span>' + keysObj.comments + '</span>\n' +
          '              </div>\n' +
          '            </div>';

          if (counting <= 3) {
            document.getElementById('footerBlog').innerHTML += '<div class="flex-row footer__center-blog">\n' +
            '          <div class="footer__center-blog-photo">\n' +
            '            <a href="#"><img src=' + keysObj.previewImg + ' alt="desk" class="footer__center-blog-img"></a>\n' +
            '          </div>\n' +
            '          <div class="footer__center-blog-info">\n' +
            '            <h6><a href="#">' + keysObj.title + '</a></h6>\n' +
            '            <p class="footer__center-blog-info-time"><em>' + month + ` ${date}, ` + year + '</em></p>\n' +
            '          </div>\n' +
            '        </div>';
          }
        });
      });
};


getBlogs();

