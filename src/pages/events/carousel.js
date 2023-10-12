import React from 'react';
const slideWidth = 30;
const _items = [
    {
        player: {
            title: 'SMART AGROTHON 2022',
            desc: 'Karpagam College of Engineering, Hackathon, Coimbatore, Tamil Nadu, 23rd November - 15th December 2022',
            image: 'https://www.knowafest.com/assets/img/Eventlogo.gif',
            link:'https://www.google.com/search?q=ultra+hd+storm+wallpaper+4k&tbm=isch&ved=2ahUKEwjtot3j1-n7AhW-k9gFHcIfBbwQ2-cCegQIABAA&oq=ultra+hd+storm&gs_lcp=CgNpbWcQARgAMgUIABCABDIFCAAQgAQyBQgAEIAEMgYIABAIEB46BAgAEEM6CAgAEIAEELEDOgQIABADOggIABCxAxCDAToHCAAQsQMQQzoLCAAQgAQQsQMQgwE6CggAELEDEIMBEEM6BwgAEIAEEBhQ9AhYj4IBYOaXAWgCcAB4BIABhgSIAfM9kgEKMi0xMC4yLjguMpgBAKABAaoBC2d3cy13aXotaW1nsAEAwAEB&sclient=img&ei=U6uRY62tEL6n4t4Pwr-U4As&bih=639&biw=681&rlz=1C1CHBD_enIN1034IN1034#imgrc=Yh1Ebr3Skf0LXM',
        },
    },
    {
        player: {
            title: "Intelligent Innovators Hackathon(I2H)",
            desc: 'Sri Eshwar College of Engineering, National Level Hackathon, Coimbatore, Tamil Nadu, 4th - 5th November 2022',
            image: 'https://th.bing.com/th/id/OIP.0wokdPRXpoSnlL6PBbq7TgHaHa?w=183&h=183&c=7&r=0&o=5&pid=1.7',
            link:'https://www.google.com/search?q=ultra+hd+storm+wallpaper+4k&tbm=isch&ved=2ahUKEwjtot3j1-n7AhW-k9gFHcIfBbwQ2-cCegQIABAA&oq=ultra+hd+storm&gs_lcp=CgNpbWcQARgAMgUIABCABDIFCAAQgAQyBQgAEIAEMgYIABAIEB46BAgAEEM6CAgAEIAEELEDOgQIABADOggIABCxAxCDAToHCAAQsQMQQzoLCAAQgAQQsQMQgwE6CggAELEDEIMBEEM6BwgAEIAEEBhQ9AhYj4IBYOaXAWgCcAB4BIABhgSIAfM9kgEKMi0xMC4yLjguMpgBAKABAaoBC2d3cy13aXotaW1nsAEAwAEB&sclient=img&ei=U6uRY62tEL6n4t4Pwr-U4As&bih=639&biw=681&rlz=1C1CHBD_enIN1034IN1034#imgrc=Yh1Ebr3Skf0LXM',
        },
    },
    {
        player: {
            title: 'Intel® oneAPI Hackathon for Open Innovation',
            desc: 'Online Hackathon',
            image: 'https://he-s3.s3.amazonaws.com/media/cache/25/7a/257a4e428149044c185c20fc4eb2001a.png',
        },
    },
    {
        player: {
            title: 'IBM zStudent Contest ',
            desc: 'Held on the IBM Z Xplore Learning Platform',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxhl89aAtgeMfYFiuw4fFm8ahP-xcuxQaTMw&usqp=CAU',
            link:'https://www.google.com/search?q=ultra+hd+storm+wallpaper+4k&tbm=isch&ved=2ahUKEwjtot3j1-n7AhW-k9gFHcIfBbwQ2-cCegQIABAA&oq=ultra+hd+storm&gs_lcp=CgNpbWcQARgAMgUIABCABDIFCAAQgAQyBQgAEIAEMgYIABAIEB46BAgAEEM6CAgAEIAEELEDOgQIABADOggIABCxAxCDAToHCAAQsQMQQzoLCAAQgAQQsQMQgwE6CggAELEDEIMBEEM6BwgAEIAEEBhQ9AhYj4IBYOaXAWgCcAB4BIABhgSIAfM9kgEKMi0xMC4yLjguMpgBAKABAaoBC2d3cy13aXotaW1nsAEAwAEB&sclient=img&ei=U6uRY62tEL6n4t4Pwr-U4As&bih=639&biw=681&rlz=1C1CHBD_enIN1034IN1034#imgrc=Yh1Ebr3Skf0LXM',
        },
    },
    {
        player: {
            title: 'Oceans 2022 Chennai',
            desc: '(Virtual) Hardware Interface and Data Analysis(HIDA) for Unified Earth System Observation',
            image: 'https://chennai22.oceansconference.org/wp-content/uploads/2021/02/oceans-chennai-logo.png',
        },
    },
];

const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
    const item = {
        styles: {
            transform: `translateX(${position * slideWidth}rem)`,
        },
        player: _items[idx].player,
    };

    switch (position) {
        case length - 1:
        case length + 1:
            item.styles = {...item.styles, filter: 'grayscale(1)'};
            break;
        case length:
            break;
        default:
            item.styles = {...item.styles, opacity: 0};
            break;
    }

    return item;
};

const CarouselSlideItem = ({pos, idx, activeIdx}) => {
    const item = createItem(pos, idx, activeIdx);

    return (
        <li className="carousel__slide-item" style={item.styles}>
            <div className="carousel__slide-item-img-link">
                <img src={item.player.image} alt={item.player.title} />
            </div>
            <div className="carousel-slide-item__body">
                <h4>{item.player.title}</h4>
                <p>{item.player.desc}</p>
                 {/* <p>{item.player.desc}</p> */}

            </div>
        </li>
    );
};

const keys = Array.from(Array(_items.length).keys());

const Carousel = () => {
    const [items, setItems] = React.useState(keys);
    const [isTicking, setIsTicking] = React.useState(false);
    const [activeIdx, setActiveIdx] = React.useState(0);
    const bigLength = items.length;

    const prevClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map((_, i) => prev[(i + jump) % bigLength]);
            });
        }
    };

    const nextClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map(
                    (_, i) => prev[(i - jump + bigLength) % bigLength],
                );
            });
        }
    };

    const handleDotClick = (idx) => {
        if (idx < activeIdx) prevClick(activeIdx - idx);
        if (idx > activeIdx) nextClick(idx - activeIdx);
    };

    React.useEffect(() => {
        if (isTicking) sleep(300).then(() => setIsTicking(false));
    }, [isTicking]);

    React.useEffect(() => {
        setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
    }, [items]);

    return (
        <div className="carousel__wrap">
            <div className="carousel__inner">
                <button className="carousel_btn carousel_btn--prev" onClick={() => prevClick()}>
                    <i className="carousel_btn-arrow carousel_btn-arrow--left" />
                </button>
                <div className="carousel__container">
                    <ul className="carousel__slide-list">
                        {items.map((pos, i) => (
                            <CarouselSlideItem
                                key={i}
                                idx={i}
                                pos={pos}
                                activeIdx={activeIdx}
                            />
                        ))}
                    </ul>
                </div>
                <button className="carousel_btn carousel_btn--next" onClick={() => nextClick()}>
                    <i className="carousel_btn-arrow carousel_btn-arrow--right" />
                </button>
                <div className="carousel__dots">
                    {items.slice(0, length).map((pos, i) => (
                        <button
                            key={i}
                            onClick={() => handleDotClick(i)}
                            className={i === activeIdx ? 'dot active' : 'dot'}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Carousel