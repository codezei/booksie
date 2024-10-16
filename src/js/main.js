import 'bootstrap'

document.addEventListener('DOMContentLoaded', function () {
	let swiperWinners = new Swiper(".contest-winners-swiper", {
		spaceBetween: 24,
		slidesPerView: 1.5,
		navigation: {
			nextEl: ".contest-winners-button-next",
			prevEl: ".contest-winners-button-prev",
		},
		breakpoints: {
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			1024: {
				slidesPerView: 4,
			},
			1220: {
				slidesPerView: 6,
			},
		},
	});
	let swiperEbooks = new Swiper(".ebooks-swiper", {
		spaceBetween: 12,
		slidesPerView: 1.5,
		navigation: {
			nextEl: ".ebooks-button-next",
			prevEl: ".ebooks-button-prev",
		},
		breakpoints: {
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			1024: {
				slidesPerView: 4,
			},
			1220: {
				slidesPerView: 5,
			},
		},
	});
	let swiperShortStories = new Swiper(".short-stories-swiper", {
		spaceBetween: 24,
		slidesPerView: 1.5,
		navigation: {
			nextEl: ".short-stories-button-next",
			prevEl: ".short-stories-button-prev",
		},
		breakpoints: {
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			1024: {
				slidesPerView: 4,
			},
			1220: {
				slidesPerView: 5,
			},
		},
	});
	let swiperPoems = new Swiper(".poems-swiper", {
		spaceBetween: 24,
		slidesPerView: 1.5,
		navigation: {
			nextEl: ".poems-button-next",
			prevEl: ".poems-button-prev",
		},
		breakpoints: {
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			1024: {
				slidesPerView: 4,
			},
			1220: {
				slidesPerView: 5,
			},
		},
	});
	let swiperLimited = new Swiper(".limited-swiper", {
		spaceBetween: 12,
		slidesPerView: 1,
		navigation: {
			nextEl: ".limited-button-next",
			prevEl: ".limited-button-prev",
		},
		breakpoints: {
			375: {
				slidesPerView: 1.5,
			},
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			1024: {
				slidesPerView: 4,
			},
			1220: {
				slidesPerView: 5,
			},
			1440: {
				slidesPerView: 6,
			},
		},
	});
	let swiperBoosted = new Swiper(".boosted-swiper", {
		spaceBetween: 24,
		slidesPerView: 1,
		navigation: {
			nextEl: ".boosted-button-next",
			prevEl: ".boosted-button-prev",
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1220: {
				slidesPerView: 4,
			},
		},
	});
	let swiperFeaturedAudio = new Swiper(".featured-audio-swiper", {
		spaceBetween: 24,
		slidesPerView: 1.5,
		navigation: {
			nextEl: ".featured-audio-button-next",
			prevEl: ".featured-audio-button-prev",
		},
		breakpoints: {
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			992: {
				spaceBetween: 32,
				slidesPerView: 3,
			},
			1220: {
				spaceBetween: 64,
				slidesPerView: 3,
			},
		},
	});
	let swiperFeaturedReads = new Swiper(".featured-reads-swiper", {
		spaceBetween: 16,
		slidesPerView: 1.5,
		grid: {
			rows: 1,
		},
		navigation: {
			nextEl: ".featured-reads-button-next",
			prevEl: ".featured-reads-button-prev",
		},
		breakpoints: {
			576: {
				slidesPerView: 2,
				spaceBetween: 24,
				grid: {
					rows: 1,
				},
			},
			768: {
				slidesPerView: 3,
				grid: {
					rows: 1,
				},
			},
			992: {
				slidesPerView: 2,
				grid: {
					rows: 1,
				},
			},
			1220: {
				slidesPerView: 2,
				grid: {
					rows: 2,
				},
			},
		},
	});
	let newBooksBooks = new Swiper(".new-books-swiper", {
		spaceBetween: 12,
		slidesPerView: 1.5,
		navigation: {
			nextEl: ".new-books-button-next",
			prevEl: ".new-books-button-prev",
		},
		breakpoints: {
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			1024: {
				slidesPerView: 4,
			},
			1220: {
				slidesPerView: 5,
			},
		},
	});
	let otherBooks = new Swiper(".boosted-other-swiper", {
		spaceBetween: 12,
		slidesPerView: 1.5,
		navigation: {
			nextEl: ".boosted-other-button-next",
			prevEl: ".boosted-other-button-prev",
		},
		breakpoints: {
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			1024: {
				slidesPerView: 4,
			},
			1220: {
				slidesPerView: 5,
			},
			1440: {
				slidesPerView: 6,
			},
		},
	});
	let premiumBooks = new Swiper(".boosted-premium-swiper", {
		spaceBetween: 12,
		slidesPerView: 1.5,
		navigation: {
			nextEl: ".boosted-premium-button-next",
			prevEl: ".boosted-premium-button-prev",
		},
		breakpoints: {
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			1024: {
				slidesPerView: 4,
			},
			1220: {
				slidesPerView: 5,
			},
			1440: {
				slidesPerView: 6,
			},
		},
	});
	let previousWinners = new Swiper(".previous-winners-swiper", {
		spaceBetween: 12,
		slidesPerView: 1.5,
		navigation: {
			nextEl: ".previous-winners-button-next",
			prevEl: ".previous-winners-button-prev",
		},
		breakpoints: {
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			992: {
				spaceBetween: 24,
				slidesPerView: 3,
			}
		},
	});


	dragAndDrop()
	lazyVideo()
})


function lazyVideo () {
	const videoThumbnails = document.querySelectorAll(".video-thumbnail");

	videoThumbnails.forEach(thumbnail => {
	  thumbnail.addEventListener("click", function () {
		const videoId = this.getAttribute("data-video-id");
		const iframe = document.createElement("iframe");
  
		iframe.setAttribute("src", `https://www.youtube.com/embed/${videoId}?autoplay=1`);
		iframe.setAttribute("frameborder", "0");
		iframe.setAttribute("allowfullscreen", "1");
		iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
		iframe.classList.add('video-iframe')
		thumbnail.replaceWith(iframe);
	  });
	});
}


function dragAndDrop () {
    const dropArea = document.getElementById('drop-area');
	if (!dropArea) return
    const input = document.getElementById('drop-image');
	const previewImageContainer = document.getElementById('preview-image-container');
	const previewRemoveImage = document.getElementById('preview-remove-image');

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        dropArea.addEventListener(eventName, () => dropArea.classList.add('highlight'), false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, () => dropArea.classList.remove('highlight'), false);
    });

    dropArea.addEventListener('drop', handleDrop, false);

    function handleDrop(e) {
        let dt = e.dataTransfer;
        let files = dt.files;

        if (files.length) {
            handleFiles(files);
        }
    }

    function handleFiles(files) {

        const file = files[0];

        if (validateFile(file)) {
            input.files = files;
            uploadFile(file);
			previewFile(file);
        } else {
            alert('Please upload a valid file (SVG, PNG, JPG, GIF)');
        }
    }

    function validateFile(file) {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml'];
        const maxSize = 800 * 400;

        if (!allowedTypes.includes(file.type)) {
            return false;
        } 

        return true;
    }

    function uploadFile(file) {
        console.log('Загружен файл:', file);
    }

    dropArea.addEventListener('click', function () {
        input.click();
    });

    input.addEventListener('change', function () {
        const files = this.files;
        if (files.length) {
            handleFiles(files);
        }
    });

	function previewFile(file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            previewImageContainer.innerHTML = '';

            const img = document.createElement('img');
            img.src = e.target.result;
            previewImageContainer.appendChild(img);
        };

        reader.readAsDataURL(file);
    }
	previewRemoveImage.addEventListener('click', function () {
		previewImageContainer.innerHTML = ''
		input.value = ''
	})
}


