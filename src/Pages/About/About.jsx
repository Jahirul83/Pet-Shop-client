import { useContext } from 'react';
import aboutPic from '../../assets/undraw_Portfolio_website_re_jsdd.png'
import { AuthContext } from '../../providers/AuthProvider';

const About = () => {
    const { dark} = useContext(AuthContext);
    const containerStyle = {
        backgroundColor: dark ? '#333333' : '#ffffff',
        color: dark ? '#ffffff' : '#333333',
      };
    return (
        <div>
            <div style={containerStyle} className="hero min-h-screen bg-base-200 p-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={aboutPic}
                        className="max-w-sm rounded-lg shadow-2xl w-1/2 md:w-full" />
                    <div>
                        <h1 className="text-5xl font-bold">About Our pet shop Website</h1>
                        <h1 className="text-3xl font-bold">Welcome to Pet Shop</h1>
                        <p className="py-6">Pet Shop is more than a platform; its a promise of love and companionship. Our mission is simple: rescue, nurture, and connect pets with caring families. What sets us apart is our commitment to transparency, compassionate care, and building a community that shares our passion. Join us on this journey, where each adoption brings joy and transforms lives.</p>
                        <h1 className="text-3xl font-bold">What We Offer</h1>
                        <h1 className="text-2xl font-bold">Pet Shop: Uniting Hearts, One Adoption at a Time</h1>
                        <p className="py-6">At Pet Shop, we believe in the power of second chances and the transformative impact of the human-animal bond. Our team, a dedicated group of animal lovers, works tirelessly to create a haven for pets and their future families. Explore our transparent adoption process and be part of a community that celebrates every adoption as a victory for compassion and connection.</p>
                        <h1 className="text-3xl font-bold">Pet Shop: Rescuing Stories, Creating Families</h1>
                        <p className="py-6">Discover the heartwarming stories of resilience at Pet Shop. We rescue pets with tales of triumph, ready to find their forever homes. Our commitment to transparency ensures you know each pets unique journey. Join us in creating a world where every pet has a chance at a loving family. Pet Shop: where stories of hope unfold, and every adoption changes a life.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;