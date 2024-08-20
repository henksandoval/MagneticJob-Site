import { Facts } from "./Facts";
import { WorkExperience } from "./WorkExperience";
import { About } from "./about";
import { Contact } from "./contact";
import { Education } from "./education";
import { Skills } from "./skills";
import { Summary } from "./summary";
import { Titles } from "./titles";


export interface Profile {
	birthday?: string;
	contact?: Contact;
	about?: About;
	facts?: Facts;
	skills?: Skills;
	titles?: Titles;
	workExperience?: WorkExperience;
	education?: Education;
	summary?: Summary;
}