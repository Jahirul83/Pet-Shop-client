import img1 from '../../../assets/banner1.jpg'
import img2 from '../../../assets/banner2.jpg'
import img3 from '../../../assets/banner3.jpg'
import img4 from '../../../assets/banner4.jpg'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-80">
                <div id="item1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full h-auto" />
                    <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            <h3 className='text-4xl font-bold'>Welcome to Our Pet Adoption Platform</h3>
                            <p>Welcome to pet-shop , where love finds a home. Discover a world of adorable pets waiting for a loving family. Browse through our diverse selection of cats, dogs, and more. Your perfect companion is just a click away!</p>
                        </div>
                    </div>
                </div>
                <div id="item2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full h-auto" />
                    <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            <h3 className='text-4xl font-bold'>Why Adopt a Pet?</h3>
                            <p>: When you adopt a pet, your not just gaining a companion; your saving a life. Explore the rewards of adoption, from loyal friendships to unforgettable moments. Every adoption contributes to a brighter future for animals in need. Join us in making a difference today!</p>
                        </div>
                    </div>
                </div>
                <div id="item3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full h-auto" />
                    <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            <h3 className='text-4xl font-bold'> Meet Our Rescued Stars</h3>
                            <p>Get inspired by the incredible stories of pets who have overcome adversity. Meet our rescued stars—pets with tales of resilience and the power of second chances. Their stories remind us that every adoption creates a new chapter filled with love and joy.</p>
                        </div>
                    </div>
                </div>
                <div id="item4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full h-auto" />
                    <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            <h3 className='text-4xl font-bold'>How It Works</h3>
                            <p>Ready to welcome a furry friend? Our adoption process is easy and stress-free. Explore our profiles, connect with our dedicated team, and let the journey to a forever home begin. Your new best friend is eagerly waiting for you.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;