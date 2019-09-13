/* eslint-disable max-len,no-undef */
const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const amountOfBlogsInsideFooter = 3;
let counting = 0;
const API = 'http://localhost:3000/api/blogs';

const getBlogs = () => {
  let fetch = fetch(API)
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

          if (counting <= amountOfBlogsInsideFooter) {
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
      }).catch((error) => console.error(error));

  return fetch;
};

const fetch = {
  init: () => {
    getBlogs();
  },
};

export default fetch;

