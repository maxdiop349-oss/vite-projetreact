import { BatteryCharging, BotMessageSquare, CheckCircle2, Fingerprint, GlobeLock, PlugZap, ShieldHalf, } from "lucide-react";
import type { FeatureItem, Navliste, PricingItem, TestimonialItem, WorkItem } from "../types/menu";

export const navItems: Navliste[] = [
    { label: "Features", link: "#" },
    { label: "Workflow", link: "#" },
    { label: "Pricing", link: "#" },
    { label: "Testimonials", link: "#" },
];

export const features: FeatureItem[] = [
    {
        icon: BotMessageSquare,
        text: "Drag-and-Drop Interface",
        description:
            "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
    },
    {
        icon: Fingerprint,
        text: "Multi-Platform Compatibility",
        description:
            "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
    },
    {
        icon: ShieldHalf,
        text: "Built-in Templates",
        description:
            "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
    },
    {
        icon: BatteryCharging,
        text: "Real-Time Preview",
        description:
            "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
    },
    {
        icon: PlugZap,
        text: "Collaboration Tools",
        description:
            "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
    },
    {
        icon: GlobeLock,
        text: "Analytics Dashboard",
        description:
            "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
    },
];

export const checklistItems: WorkItem[] = [
    {
        title: "Code merge made easy",
        description:
            "Track the performance of your VR apps and gain insights into user behavior.",
        icon: CheckCircle2,

    },
    {
        title: "Review code without worry",
        description:
            "Track the performance of your VR apps and gain insights into user behavior.",
        icon: CheckCircle2,
    },
    {
        title: "AI Assistance to reduce time",
        description:
            "Track the performance of your VR apps and gain insights into user behavior.",
        icon: CheckCircle2,
    },
    {
        title: "Share work in minutes",
        description:
            "Track the performance of your VR apps and gain insights into user behavior.",
        icon: CheckCircle2,
    },
];

export const pricingOptions: PricingItem[] = [
    {
        title: "Free",
        price: "$0",
        features: [
            "Private board sharing",
            "5 Gb Storage",
            "Web Analytics",
            "Private Mode",
        ],
    },
    {
        title: "Pro",
        price: "$10",
        features: [
            "Private board sharing",
            "10 Gb Storage",
            "Web Analytics (Advance)",
            "Private Mode",
        ],
    },
    {
        title: "Enterprise",
        price: "$200",
        features: [
            "Private board sharing",
            "Unlimited Storage",
            "High Performance Network",
            "Private Mode",
        ],
    },
];
export const testimonials: TestimonialItem[] = [
    {
        user: "John Doe",
        company: "Stellar Solutions",
        image: "/images/user1.jpg",
        text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
    },
    {
        user: "Jane Smith",
        company: "Blue Horizon Technologies",
        image: "/images/user2.jpg",
        text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
    },
    {
        user: "David Johnson",
        company: "Quantum Innovations",
        image: "/images/user3.jpg",
        text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
    },
    {
        user: "Ronee Brown",
        company: "Fusion Dynamics",
        image: "/images/user4.jpg",
        text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
    },
    {
        user: "Michael Wilson",
        company: "Visionary Creations",
        image: "/images/user5.jpg",
        text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
    },
    {
        user: "Emily Davis",
        company: "Synergy Systems",
        image: "/images/user6.jpg",
        text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
    },
];
export const resourcesLinks: ResourcesItems[] = [
    { href: "#", text: "Getting Started" },
    { href: "#", text: "Documentation" },
    { href: "#", text: "Tutorials" },
    { href: "#", text: "API Reference" },
    { href: "#", text: "Community Forums" },
];

export const platformLinks: PlatformItems[] = [
    { href: "#", text: "Features" },
    { href: "#", text: "Supported Devices" },
    { href: "#", text: "System Requirements" },
    { href: "#", text: "Downloads" },
    { href: "#", text: "Release Notes" },
];

export const communityLinks: CommunityItems[] = [
    { href: "#", text: "Events" },
    { href: "#", text: "Meetups" },
    { href: "#", text: "Conferences" },
    { href: "#", text: "Hackathons" },
    { href: "#", text: "Jobs" },
];
export type PlatformItems = {
    href: string;
    text: string;

}
export type ResourcesItems = {
    href: string;
    text: string;

}
export type CommunityItems = {
    href: string;
    text: string;

}