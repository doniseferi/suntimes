import { degreesToRadians, radiansToDegrees } from './angleMaths';
import trigonometryBuilder from './trigonometry';

const builder = trigonometryBuilder(degreesToRadians, radiansToDegrees);
const cosine = builder.cosine;
const sine = builder.sine;
const arcsine = builder.arcsine;
const arccosine = builder.arccosine;

export default trigonometryBuilder;
export { cosine, sine, arcsine, arccosine };
