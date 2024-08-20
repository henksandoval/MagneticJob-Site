import { Facts } from "./Facts";
import { About } from "./about";
import { Contact } from "./contact";
import { Resume } from "./resume";
import { Skills } from "./skills";

export interface Profile {
	birthday?: string;
	contact?: Contact;
	about?: About;
	facts?: Facts;
	skills?: Skills;
	resume?: Resume;
}
