import {Heading} from '../../atoms/Heading';
import { SupportingText } from '../../atoms/SupportingText';    
import { LearnMore } from '../../atoms/Button';
import './index.css';
export const Congrats =()=>(
    <div className="congrats">
        <Heading/>
        <SupportingText/>
        <LearnMore label='Learn More' />
    </div>
    
)