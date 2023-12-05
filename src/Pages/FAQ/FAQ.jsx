import { useContext } from 'react';
import faqPic from '../../assets/undraw_Questions_re_1fy7.png'
import { AuthContext } from '../../providers/AuthProvider';


const FAQ = () => {
    const { dark} = useContext(AuthContext);
    const containerStyle = {
        backgroundColor: dark ? '#333333' : '#ffffff',
        color:'#333333',
      };
    return (
        <div>
            <div  style={containerStyle} className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={faqPic} className="max-w-sm w-1/2 md:w-full rounded-lg shadow-2xl" />
                    {/* FAQ */}
                    <div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" checked="checked" />
                            <div className="collapse-title text-xl font-medium">
                            How can I adopt a pet from Pet Shop?
                            </div>
                            <div className="collapse-content">
                                <p>Adopting a pet from Pet Shop is a simple and rewarding process. Start by browsing our online profiles to find your perfect match. Once you have found a furry friend, contact us to initiate the adoption process. Our dedicated team will guide you through the necessary steps, which may include a meet-and-greet, home visit, and completing an adoption application. Transparency is our priority, so feel free to ask any questions along the way.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                            What sets Pet Shop apart from other adoption platforms?
                            </div>
                            <div className="collapse-content">
                                <p> Pet Shop stands out for its commitment to transparency, compassionate care, and community engagement. We provide detailed profiles of each pet, including their background and medical history. Our team ensures the well-being of our pets through top-notch veterinary care and personalized attention. Joining Pet Shop means becoming part of a community that celebrates the human-animal bond and actively contributes to the welfare of pets in need.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                            Can I volunteer or contribute to Pet Shop`s mission?
                            </div>
                            <div className="collapse-content">
                                <p>Absolutely! Pet Shop welcomes individuals who share our passion for animals. If you are interested in volunteering, reach out to us, and we will provide information on current opportunities. Additionally, you can contribute to our mission through donations. Your support helps us provide essential care to our pets and facilitates ongoing rescue efforts. Whether you want to volunteer your time or make a donation, your involvement makes a meaningful impact on the lives of pets awaiting their forever homes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FAQ;