function initSlider() {
  const arrowsRight = document.querySelectorAll(".arrow");
  const arrowsLeft = document.querySelectorAll(".arrowleft");
  const movieLists = document.querySelectorAll(".movie-list");

  movieLists.forEach((movieList, i) => {
    const itemNumber = movieList.querySelectorAll("img").length;
    let clickCounter = 0;

    const ratio = Math.floor(window.innerWidth / 270);

    // Xử lý mũi tên phải
    arrowsRight[i]?.addEventListener("click", function () {
      clickCounter++;
      if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
        movieList.style.transform = `translateX(${
          movieList.computedStyleMap().get("transform")[0].x.value - 290
        }px)`;
      } else {
        movieList.style.transform = "translateX(0)";
        clickCounter = 0;
      }
    });

    // Xử lý mũi tên trái
    arrowsLeft[i]?.addEventListener("click", function () {
      const currentTranslateX = movieList.computedStyleMap().get("transform")[0].x.value;

      if (currentTranslateX < 0) {
        movieList.style.transform = `translateX(${currentTranslateX + 290}px)`;
        clickCounter = Math.max(0, clickCounter - 1); // Không cho giảm âm
      } else {
        movieList.style.transform = "translateX(0)";
        clickCounter = 0;
      }
    });

  });
}
 initSlider();//gọi để thanh trượt bên trang chủ có thể hoạt động


//thanh trượt ngang
//toggle
const toggleball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container, .movie-list-title, .navbar-container, .sidebar, .left-menu-icon, .toggle, .menu-list-item, .menu-list-item a");

toggleball.addEventListener("click", function() {
    items.forEach( function(item) {
        item.classList.toggle("active");
    });
    toggleball.classList.toggle("active");
});


// Danh sách phim mẫu
const movieList = [
  {
    id: 1,
    title: "Final Score",
    title_en: "Final Score",
    year: 2010,
    genres: ["Action", "Thriller"],
    country: "UK",
    director: "Scott Mann",
    producer: "Marc Goldberg, Wayne Marc Godfrey",
    main_cast: ["Dave Bautista", "Pierce Brosnan", "Ray Stevenson"],
    image: "anhPhim/final-score.jpg",
    trailer: "/video/final_score_trailer.mp4",
    video:"/video/PHI VỤ GIẢI CỨU (Thuyết Minh)   Phim Hành Động Tội Phạm Mỹ   Phim Lẻ hay 2023   Way Phim.mp4",
    description: "Michael Knox, a former American soldier, visits the UK to see his late comrade's niece. During a football match, the stadium is taken over by terrorists. Michael fights to rescue the girl and stop a large-scale terrorist plot.",
    poster: "anhPhim/Final-score.jpg"
  },
  {
    id: 2,
    title: "Diệp Vấn 1",
    title_en: "Ip Man",
    year: 2008,
    genres: ["Action", "Drama", "Martial Arts"],
    country: "Hong Kong",
    director: "Wilson Yip",
    producer: "Raymond Wong",
    main_cast: ["Donnie Yen", "Lynn Hung", "Simon Yam"],
    image: "anhPhim/diep-van-1.jpg",
    trailer: "/video/diep-van-1-trailer.mp4",
    video:"",
    description: "Ip Man, a master martial artist, faces dangerous opponents in brutal fights to protect his honor and family.",
    poster: "anhPhim/Diep-Van-1.jpg"
  },
  {
    id: 3,
    title: "Diệp Vấn 2",
    title_en: "Ip Man 2",
    year: 2010,
    genres: ["Action", "Drama", "Martial Arts"],
    country: "Hong Kong",
    director: "Wilson Yip",
    producer: "Raymond Wong",
    main_cast: ["Donnie Yen", "Huang Xiaoming", "Sammo Hung"],
    image: "anhPhim/diep-van-2.jpg",
    video:"",
    trailer: "/video/diep-van-2-trailer.mp4",
    description: "Ip Man faces off against foreign fighters, including Mike Tyson, to defend the reputation of Chinese martial arts.",
    poster: "anhPhim/Diep-Van-2.jpg"
  },
  {
    id: 4,
    title: "Diệp Vấn 3",
    title_en: "Ip Man 3",
    year: 2012,
    genres: ["Action", "Drama", "Martial Arts"],
    country: "Hong Kong",
    director: "Wilson Yip",
    producer: "Raymond Wong",
    main_cast: ["Donnie Yen", "Mike Tyson", "Max Zhang"],
    image: "anhPhim/diep-van-3.jpg",
    trailer: "/video/diep-van-3-trailer.mp4",
    video:"",
    description: "Ip Man faces a series of dangerous challenges and enemies in the fight to defend the honor of Chinese martial arts.",
    poster: "anhPhim/Diep-Van-3.jpg"
  },
  {
    id: 5,
    title: "Diệp Vấn 4",
    title_en: "Ip Man 4: The Finale",
    year: 2019,
    genres: ["Action", "Drama", "Martial Arts"],
    country: "Hong Kong",
    director: "Wilson Yip",
    producer: "Raymond Wong",
    main_cast: ["Donnie Yen", "Wu Yue", "Scott Adkins"],
    image: "anhPhim/diep-Van-4.jpg",
    trailer: "/video/diep-van-4-trailer.mp4",
    video:"",
    description: "Ip Man continues his journey to uphold martial arts in a changing society.",
    poster: "anhPhim/Diep-Van-4.jpg"
  },
  {
    id: 6,
    title: "Hoàng Phi Hồng: Bí Ẩn Một Huyền Thoại",
    title_en: "Rise of the Legend",
    year: 2014,
    genres: ["Action", "Drama", "Martial Arts"],
    country: "China",
    director: "Roy Chow",
    producer: "Bill Kong",
    main_cast: ["Eddie Peng", "Sammo Hung", "Angelababy"],
    image: "anhPhim/hoang-phi-hong.jpg",
    trailer: "/video/hoang-phi-hong-bi-an-mot-huyen-thoai-trailer.mp4",
    video:"",
    description: "Eddie Peng plays Wong Fei Hung in a martial arts tale facing major challenges in the late 19th century.",
    poster: "anhPhim/Hoang-Phi-Hong-Bi-An-Mot-Huyen-Thoai.jpg"
  },
  {
    id: 7,
    title: "Chiến Lang",
    title_en: "Wolf Warrior",
    year: 2015,
    genres: ["Action", "Thriller", "War"],
    country: "China",
    director: "Wu Jing",
    producer: "Zhang Qi",
    main_cast: ["Wu Jing", "Scott Adkins", "Yang Zi"],
    image: "anhPhim/chien-lang.jpg",
    trailer: "/video/chien-lang-trailer.mp4",
    video:"",
    description: "Wu Jing plays an elite soldier who defends his homeland from dark forces.",
    poster: "anhPhim/Chien-Lang.jpg"
  },
  {
    id: 8,
    title: "Chốt Chặn Cuối Cùng",
    title_en: "The Last Stand",
    year: 2013,
    genres: ["Action", "Thriller", "Crime"],
    country: "USA",
    director: "Kim Jee-woon",
    producer: "Lorenzo di Bonaventura",
    main_cast: ["Arnold Schwarzenegger", "Forest Whitaker", "Johnny Knoxville"],
    image: "anhPhim/chot-chan-cuoi-cung.jpg",
    trailer: "/video/chot-chan-cuoi-cung-trailer.mp4",
    video:"",
    description: "A former soldier joins a hostage rescue operation at a stadium, confronting a large-scale terrorist plot.",
    poster: "anhPhim/Chot-Chan-Cuoi-Cung.jpg"
  },
  {
    id: 9,
    title: "Sát Thủ Thợ Máy 2",
    title_en: "Mechanic: Resurrection",
    year: 2016,
    genres: ["Action", "Crime", "Thriller"],
    country: "USA",
    director: "Dennis Gansel",
    producer: "Frank DeMartini, John Thompson",
    main_cast: ["Jason Statham", "Jessica Alba", "Tommy Lee Jones"],
    image: "anhPhim/machine-resurrection.jpg",
    trailer: "/video/sat-thu-tho-may-2-trailer.mp4",
    video:"",
    description: "A hunted assassin must use all his skills to survive and complete his mission.",
    poster: "anhPhim/Sat-Thu-Tho-May-2.jpg"
  },
  {
    id: 10,
    title: "Skin Trade",
    title_en: "Skin Trade",
    year: 2014,
    genres: ["Action", "Crime"],
    country: "USA",
    director: "Ekachai Uekrongtham",
    producer: "Renny Harlin, Joel Silver",
    main_cast: ["Dolph Lundgren", "Tony Jaa", "Ron Perlman"],
    image: "anhPhim/Skin-Trade.jpg",
    trailer: "/video/[Phim Chiếu Rạp] Skin Trade - Mạng Đổi Mạng Official Trailer",
    video:"",
    description: "An American cop and an assassin team up to fight a human trafficking crime syndicate.",
    poster: "anhPhim/Skin-Trade.jpg"
  },
  {
    id: 11,
    title: "Huyền Thoại Hercules",
    title_en: "The Legend of Hercules",
    year: 2014,
    genres: ["Action", "Adventure", "Mythology"],
    country: "USA",
    director: "Renny Harlin",
    producer: "Les Weldon, Danny Lerner",
    main_cast: ["Kellan Lutz", "Gaia Weiss", "Scott Adkins"],
    image: "anhPhim/huyen-thoai-hercules.jpg",
    trailer: "/video/huyen-thoai-hercules-trailer.mp4",
    video:"",
    description: "Hercules, one of Greece's greatest heroes, faces immense challenges to save his world.",
    poster: "anhPhim/Huyen-Thoai-Hercules.jpg"
  },
  {
    id: 12,
    title: "Krrish",
    title_en: "Krrish",
    year: 2006,
    genres: ["Science Fiction", "Action", "Drama"],
    country: "India",
    director: "Rakesh Roshan",
    producer: "Rakesh Roshan",
    main_cast: ["Hrithik Roshan", "Priyanka Chopra", "Rekha"],
    image: "anhPhim/Krrish.jpg",
    trailer: "/video/krrish-trailer.mp4",
    video:"",
    description: "Krishna, a man with superpowers, learns his past and fights an evil organization exploiting his power.",
    poster: "anhPhim/Krrish.jpg"
  },
  {
    id: 13,
    title: "Chiến Binh Hỏa Tiễn",
    title_en: "The Protector",
    year: 2005,
    genres: ["Action", "Martial Arts"],
    country: "Thailand",
    director: "Prachya Pinkaew",
    producer: "Sukanya Vongsthapat, Prachya Pinkaew",
    main_cast: ["Tony Jaa", "Petchtai Wongkamlao", "Bongkoj Khongmalai"],
    image: "anhPhim/chien-binh-hoa-tien.jpg",
    trailer: "/video/the_protector_trailer.mp4",
    video:"",
    description: "A young fighter travels to Australia to retrieve his stolen elephants and battles an underground crime syndicate.",
    poster: "anhPhim/the_protector.jpg"
},
{
    id: 14,
    title: "Cẩm Y Vệ",
    title_en: "14 Blades",
    year: 2010,
    genres: ["Action", "Historical", "Martial Arts"],
    country: "China",
    director: "Daniel Lee",
    producer: "Zhang Weiping",
    main_cast: ["Chung Tử Đơn", "Triệu Vy", "Ngô Tôn"],
    image: "anhPhim/cam-y-ve.jpg",
    trailer: "/video/14_blades_trailer.mp4",
    video:"",
    description: "A secret service agent of the emperor is betrayed and must fight against powerful enemies to clear his name.",
    poster: "anhPhim/14_blades.jpg"
},
{
  id: 15,
  title: "Điệp Vụ Giải Cứu",
  title_en: "Hunter Killer",
  year: 2018,
  genres: ["Action", "Thriller", "War"],
  country: "USA",
  director: "Donovan Marsh",
  producer: "Neal H. Moritz",
  main_cast: ["Gerard Butler", "Gary Oldman", "Common"],
  image: "anhPhim/diep-vu-giai-cuu.jpg",
  trailer: "/video/hunter_killer_trailer.mp4",
  video:"",
  description: "Một đội tàu ngầm và lực lượng đặc nhiệm Mỹ được giao nhiệm vụ ngăn chặn chiến tranh thế giới khi một âm mưu đảo chính diễn ra ở Nga.",
  poster: "anhPhim/hunter-killer-poster.jpg"
}
];

 

// ======================== TÌM KIẾM & GỢI Ý ========================

// Phần hai: Thanh search-box
const searchInput = document.getElementById("search-text");
const suggestionsBox = document.getElementById("suggestions");
const searchBtn = document.getElementById("search-btn");
const resultBox = document.querySelector(".movie-list.search-page");
const searchBox = document.getElementById("search-box");

// Gợi ý khi nhập
// Định nghĩa hàm tìm kiếm
function normalize(str) {
  const params = new URLSearchParams(window.location.search);
  return str.toLowerCase().trim().replace(/\s+/g, ' ');
}

function performSearch() {
  const keyword = normalize(searchInput.value);
  if (keyword === "") return;

  const movieResultBox = document.querySelector(".movie-list.search-page");
  movieResultBox.innerHTML = "";

  const displayedMovieIds = []; // Lưu ID của các phim đã hiển thị

  const foundMovies = movieList.filter(movie =>
    normalize(movie.title).includes(keyword) ||
    normalize(movie.title_en).includes(keyword) ||
    movie.genres.some(genre => normalize(genre).includes(keyword)) ||
    normalize(movie.country).includes(keyword) ||
    normalize(movie.director).includes(keyword) ||
    normalize(movie.producer).includes(keyword) ||
    movie.main_cast.some(cast => normalize(cast).includes(keyword))
  );

  if (foundMovies.length === 0) {
    movieResultBox.innerHTML = `<p>Không tìm thấy phim phù hợp.</p>`;
    return;
  }

  // Hiển thị phim tìm được
  foundMovies.forEach(movie => {
    if (!displayedMovieIds.includes(movie.id)) {
      displayedMovieIds.push(movie.id);

      const movieItem = document.createElement("div");
      movieItem.classList.add("movie-list-item");
      movieItem.innerHTML = `
        <img class="movie-list-item-img" src="${movie.image}" alt="${movie.title}">
        <span class="movie-list-item-title">${movie.title}</span>
        <p class="movie-list-item-desc">${movie.description}</p>
        <button class="movie-list-item-button" onclick="location.href='Trangchitiet.html?id=${movie.id}'">Xem phim</button>
      `;
      movieResultBox.appendChild(movieItem);
    }
  });

  // Hiển thị phim tương tự
  const similarMovies = movieList.filter(movie =>
    foundMovies.some(fm =>
      movie.id !== fm.id &&
      (movie.genres.some(genre => fm.genres.includes(genre)) ||
       movie.director === fm.director ||
       movie.main_cast.some(cast => fm.main_cast.includes(cast)))
    )
  );

  if (similarMovies.length > 0) {
    similarMovies.forEach(movie => {
      if (!displayedMovieIds.includes(movie.id)) {
        displayedMovieIds.push(movie.id);

        const movieItem = document.createElement("div");
        movieItem.classList.add("movie-list-item");
        movieItem.innerHTML = `
          <img class="movie-list-item-img" src="${movie.image}" alt="${movie.title}">
          <span class="movie-list-item-title">${movie.title}</span>
          <p class="movie-list-item-desc">${movie.description}</p>
          <button class="movie-list-item-button" onclick="location.href='Trangchitiet.html?id=${movie.id}'">Xem phim</button>
        `;
        movieResultBox.appendChild(movieItem);
      }
    });
  } else {
    movieResultBox.innerHTML += `<p>Không tìm thấy bộ phim tương tự.</p>`;
  }

  // Ẩn phần gợi ý
  suggestionsBox.innerHTML = "";
  suggestionsBox.style.display = "none";
}


// Thực hiện các sự kiện lắng nghe
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!searchBox.classList.contains("expanded")) {
    searchBox.classList.add("expanded");
    searchInput.focus();
    return;
  }
  performSearch(); // Gọi hàm tìm kiếm
});

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    performSearch();
  }
});

searchInput.addEventListener("input", () => {
  performSearch(); // Nếu bạn có phần gợi ý
});




// ======================== ẨN INPUT NẾU CLICK RA NGOÀI ========================

document.addEventListener("click", (e) => {
  const clickedOutside = !searchBox.contains(e.target);

  if (clickedOutside && searchInput.value.trim() === "") {
    searchBox.classList.remove("expanded");
    searchBox.classList.remove("active");
    suggestionsBox.style.display = "none";
  }
});





// PHẦN III ========================Trang xem phim(trang chi tiết)==========================
const params = new URLSearchParams(window.location.search);
const movieId = parseInt(params.get('id'));

const movie = movieList.find(m => m.id === movieId);

if (movie) {
  document.getElementById('movie-title').textContent = movie.title;
  document.getElementById('movie-description').textContent = movie.description;

  const videoElement = document.getElementById('movie-video');
  const source = document.getElementById('video-source');

  if (movie.video) {
    source.src = movie.video;
    videoElement.poster = movie.poster;

    videoElement.style.display = "block";
    videoElement.load(); // Quan trọng! Phải gọi để load lại video
  } else {
    videoElement.style.display = "none";
  }
} 
if (!movie) {
  const movieTitleEl = document.getElementById('movie-title');
  if (movieTitleEl) {
    movieTitleEl.textContent = "Không tìm thấy phim.";
  }
}


//Danh sách phim đề xuất của trang xem phim
const currentMovie = movieList.find(movie => movie.id === movieId);

if (currentMovie!==null) {
  // Hiển thị thông tin bộ phim hiện tại
  document.getElementById('movie-title').textContent = currentMovie.title;
  document.getElementById('movie-description').textContent = currentMovie.description;
  document.getElementById('movie-video').poster = currentMovie.image;

  // Nếu có trailer thì hiển thị video
  if (currentMovie.trailer) {
    const videoElement = document.getElementById('movie-video');
    const source = document.getElementById('video-source');
    source.src = currentMovie.trailer;
    videoElement.style.display = "block";
    videoElement.load();  // Quan trọng, phải gọi để load lại video
  } else {
    document.getElementById('movie-video').style.display = "none";  // Nếu không có trailer thì ẩn
  }

  // Hàm lọc phim đề xuất dựa trên thể loại
  function getSuggestedMovies(currentMovie) {
    const suggestedMovies = [];  // Mảng chứa phim đề xuất

    // Duyệt qua tất cả các phim trong mảng
    for (let i = 0; i < movieList.length; i++) {
      const movie = movieList[i];

      // So sánh genre của phim hiện tại với phim trong mảng
      if (
        movie.id !== currentMovie.id &&
        Array.isArray(movie.genres) &&
        Array.isArray(currentMovie.genres) &&
        movie.genres.some(genre => currentMovie.genres.includes(genre))
      )
      
      {
        suggestedMovies.push(movie);  // Nếu thỏa mãn điều kiện thì thêm vào danh sách đề xuất
      }
    }
    return suggestedMovies;  // Trả về danh sách phim đề xuất sau khi duyệt hết
  }

  // Lấy danh sách phim đề xuất
  const suggestedMovies = getSuggestedMovies(currentMovie);

  // Hiển thị danh sách phim đề xuất trên giao diện
  const movieListContainer = document.querySelector(".movie-list");

  // Xoá dữ liệu cũ trong danh sách đề xuất
  movieListContainer.innerHTML = "";

  // Kiểm tra nếu có phim đề xuất thì thêm vào giao diện
  if (suggestedMovies.length > 0) {
    suggestedMovies.forEach(movie => {
      const movieItem = document.createElement("div");
      movieItem.classList.add("movie-list-item");

      movieItem.innerHTML = `
        <img class="movie-list-item-img" src="${movie.image}" alt="${movie.title}">
        <span class="movie-list-item-title">${movie.title}</span>
        <p class="movie-list-item-desc">${movie.description}</p>
        <button class="movie-list-item-button">Watch</button>
      `;


      movieListContainer.appendChild(movieItem);  // Thêm phim vào giao diện
    });
  } else {
    // Nếu không có phim đề xuất, hiển thị thông báo
    movieListContainer.innerHTML = "<p>Không có phim đề xuất.</p>";
  }

  initSlider();//gọi lại hàm thực hiện thanh trượt ngang vì dùng movieListContainer.innerHTML = "";

} else {
  document.getElementById('movie-title').textContent = "Không tìm thấy phim.";
}


