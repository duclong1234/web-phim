
                    function renderFeaturedMovies() {
                        const container = document.getElementById("scroll-container");
                        container.innerHTML = ""; // Xoá nội dung cũ nếu có

                         console.log(movieList);
                        for (let i = 0; i < 10; i++) {
                            const movie = movieList[i];
                            const item = document.createElement("div");
                            item.className = "movie-list-main-item";

                            item.innerHTML = 
                            `<video class="movie-video" autoplay muted poster="${movie.poster}">
                                <source src="${movie.trailer}" type="video/mp4">
                            </video>
                            
                            <div class="overlay">
                                <button class="mute-btn">
                                    <i class="fa-solid fa-volume-xmark"></i> <!-- Icon mặc định là loa câm -->
                                </button>

                                <h2 class="featured-title">${movie.title}</h2>
                                <button class="featured-button" onclick="location.href='Trangchitiet.html?id=${movie.id}'">
                                    <i class="fa-solid fa-play"></i> Xem ngay
                                </button>
                            </div>
                        `;

                            container.appendChild(item);
                        }
                       
                        // Thêm sự kiện cho các nút loa sau khi tạo phần tử
                        const muteBtns = document.querySelectorAll(".mute-btn");
                        const videos = document.querySelectorAll(".movie-video");

                        muteBtns.forEach((btn, index) => {
                            const video = videos[index];
                            btn.addEventListener("click", function() {
                                // Nếu video đang ở chế độ tắt âm (muted), thì mở âm lên
                                if (video.muted) {
                                    video.muted = false;
                                    btn.innerHTML = '<i class="fa-solid fa-volume-high"></i>'; // Cập nhật icon loa
                                } else {
                                    video.muted = true;
                                    btn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>'; // Cập nhật icon tắt loa
                                }
                            });
                        });
                    }
                

                    // Gọi hàm khi trang đã tải xong
                    window.onload = renderFeaturedMovies;

                    
                    let currentIndex = 0;

                    function scrollToRight(b) {
                        const container = document.getElementById("scroll-container");
                        const items = document.querySelectorAll(".movie-list-main-item");
                        const videos = document.querySelectorAll(".movie-video"); // cần phải có dòng này ở 
                        //đây! vì videos đã khai báo bên trong hàm renderFeaturedMovies() nên không thể cứ lấy 
                        //video mà không khai báo lại trong hàm crollToRight() này. hoặc khai báo bên ngoài thì
                        //phải dùng let để có thể cập nhật giá trị.
                        const maxIndex = items.length - 1;
                        
                        if (currentIndex < maxIndex&&b ==='right') {
                            videos[currentIndex].pause(); //tắt autoplay
                            videos[currentIndex].currentTime = 0;//cho thời gian trailer chạy về mốc 0
                            currentIndex++;
                            const offset = items[currentIndex].offsetLeft;
                            container.style.transform = `translateX(-${offset}px)`;
                            container.style.transition = "transform 0.5s ease";
                            videos[currentIndex].play();//bật autoplay
                        }
                       
                        else if (currentIndex > 0 && b ==='left') {
                            videos[currentIndex].pause(); 
                            videos[currentIndex].currentTime = 0;
                            currentIndex--;
                            const offset = items[currentIndex].offsetLeft;
                            container.style.transform = `translateX(-${offset}px)`;
                            container.style.transition = "transform 0.5s ease";
                            videos[currentIndex].play();
                        }
                    }
c   