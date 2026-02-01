import type { LucideIcon } from "lucide-react";

 
 export type Navliste = {
    label:string;
    link:string,
}
  export type FeatureItem = {
    icon:LucideIcon;
    text:string;
    description:string;
}
export type TestimonialItem = {
    user: string;
    company: string;
    image: string;
    text: string;
 }
 export type WorkItem = {
    icon: LucideIcon
    title:string;
    description:string;

}
export type PricingItem = { 
title:string;
price: string;
features: string [];
}
