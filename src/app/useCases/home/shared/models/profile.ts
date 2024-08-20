import { Facts } from "./Facts";
import { WorkExperience } from "./WorkExperience";
import { About } from "./about";
import { Contact } from "./contact";
import { Education } from "./education";
import { Resume } from "./resume";
import { Skills } from "./skills";
import { Summary } from "./summary";


export interface Profile {
	birthday?: string;
	contact?: Contact;
	about?: About;
	facts?: Facts;
	skills?: Skills;
	resume?: Resume;
	workExperience?: WorkExperience;
	education?: Education;
	summary?: Summary;
}
