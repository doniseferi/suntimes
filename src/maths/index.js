import { degreesToRadians, radiansToDegrees } from './angleConversions';
import trigonometryBuilder from './trigonometry';

const builder = trigonometryBuilder(degreesToRadians, radiansToDegrees);
const cosine = builder.cosine;
const sine = builder.sine;
const arcsine = builder.arcsine;
const arccosine = builder.arccosine;

export default trigonometryBuilder;
export { cosine, sine, arcsine, arccosine };
