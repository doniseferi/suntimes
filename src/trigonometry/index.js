import { degreesToRadians, radiansToDegrees } from './angleConversions';
import acos from './acos';
import trigonometryFactory from './trigonometry';

const factory = trigonometryFactory(degreesToRadians, radiansToDegrees, acos);
const cosine = factory.cosine;
const sine = factory.sine;
const arcsine = factory.arcsine;
const arccosine = factory.arccosine;

export default trigonometryFactory;
export { cosine, sine, arcsine, arccosine, degreesToRadians, radiansToDegrees };
