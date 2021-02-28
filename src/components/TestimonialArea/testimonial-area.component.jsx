import Testimonial from '../Testimonial/testimonial.component';
import './testimonial-area.styles.scss';

const TestimonialArea = () => (
    <div className='Testimonial-Area'>
        <div className='testimonial-container'>
            <div className='testimonial-area woman-pub'></div>
            <section className='testimonial-area'>
                <Testimonial />
                <div className='man-pub'>
                    <h3>Peça para seu bar</h3>
                </div>
            </section>
        </div>
    </div>
);
 
export default TestimonialArea;