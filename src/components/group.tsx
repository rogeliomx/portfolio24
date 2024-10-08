
"use client"

import { useState } from "react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"


export function Group() {
  const [theme, setTheme] = useState("light")
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }
  return (
    <div className={`flex flex-col min-h-[100dvh] ${theme === "dark" ? "dark" : ""}`}>
      <section className="relative flex items-center justify-center h-[80vh] bg-[url('https://images.unsplash.com/photo-1457364887197-9150188c107b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <div className="flex items-center justify-center mb-4">
            <Avatar className="w-24 h-24 border-4 border-white">
              <AvatarImage src="https://media.istockphoto.com/id/1287978624/photo/autumn-portrait-man-with-beard-infront-of-beautifull-sunset-stock-photo.webp?a=1&s=612x612&w=0&k=20&c=IDn5_tQu1oG_4-eWbTmW3kGfTJ3DLXgN9MQ35k5KsYQ=" alt="Profile" />
              <AvatarFallback>RG</AvatarFallback>
            </Avatar>
          </div>
          <h1 className="text-4xl font-bold mb-2">Rogelio Galindo</h1>
          <p className="text-lg mb-6">Multidiciplinary Digital Designer | UI Design | Motion Graphics | 3D Design</p>
          <ul className="text-left max-w-md mx-auto space-y-2">
            <li className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5 text-primary" />
              Proficient in modern web technologies
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5 text-primary" />
              Passionate about building scalable and performant applications
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5 text-primary" />
              Experienced in agile development methodologies
            </li>
          </ul>
        </div>
      </section>
      <section className="py-12 bg-muted dark:bg-muted-dark">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-center">Architecture Design </h2>
          <div className="flex gap-4 overflow-x-auto pb-4">
            <Card className="min-w-[250px] flex-shrink-0">
              <img
                src="/placeholder.svg"
                width={300}
                height={169}
                alt="Project 1"
                className="rounded-t-lg object-cover"
                style={{ aspectRatio: "300/169", objectFit: "cover" }}
              />
              <CardContent className="p-4 space-y-2">
                <h3 className="text-lg font-semibold">Project 1</h3>
                <p className="text-muted-foreground dark:text-muted-foreground-dark">
                  A web application that helps users manage their tasks and projects.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  View Project
                </Link>
              </CardContent>
            </Card>
            <Card className="min-w-[250px] flex-shrink-0">
              <img
                src="/placeholder.svg"
                width={300}
                height={169}
                alt="Project 2"
                className="rounded-t-lg object-cover"
                style={{ aspectRatio: "300/169", objectFit: "cover" }}
              />
              <CardContent className="p-4 space-y-2">
                <h3 className="text-lg font-semibold">Project 2</h3>
                <p className="text-muted-foreground dark:text-muted-foreground-dark">
                  A mobile app that helps users track their fitness goals and activities.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  View Project
                </Link>
              </CardContent>
            </Card>
            <Card className="min-w-[250px] flex-shrink-0">
              <img
                src="/placeholder.svg"
                width={300}
                height={169}
                alt="Project 3"
                className="rounded-t-lg object-cover"
                style={{ aspectRatio: "300/169", objectFit: "cover" }}
              />
              <CardContent className="p-4 space-y-2">
                <h3 className="text-lg font-semibold">Project 3</h3>
                <p className="text-muted-foreground dark:text-muted-foreground-dark">
                  A web-based dashboard that provides real-time analytics and insights.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  View Project
                </Link>
              </CardContent>
            </Card>
            <Card className="min-w-[250px] flex-shrink-0">
              <img
                src="/placeholder.svg"
                width={300}
                height={169}
                alt="Project 4"
                className="rounded-t-lg object-cover"
                style={{ aspectRatio: "300/169", objectFit: "cover" }}
              />
              <CardContent className="p-4 space-y-2">
                <h3 className="text-lg font-semibold">Project 4</h3>
                <p className="text-muted-foreground dark:text-muted-foreground-dark">
                  A mobile app that helps users manage their personal finances.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  View Project
                </Link>
              </CardContent>
            </Card>
            <Card className="min-w-[250px] flex-shrink-0">
              <img
                src="/placeholder.svg"
                width={300}
                height={169}
                alt="Project 5"
                className="rounded-t-lg object-cover"
                style={{ aspectRatio: "300/169", objectFit: "cover" }}
              />
              <CardContent className="p-4 space-y-2">
                <h3 className="text-lg font-semibold">Project 5</h3>
                <p className="text-muted-foreground dark:text-muted-foreground-dark">
                  A web application that helps users collaborate on design projects.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  View Project
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-center">Web Design</h2>
          <div className="flex gap-4 overflow-x-auto pb-4">
            <Card className="min-w-[250px] flex-shrink-0">
              <img
                src="/placeholder.svg"
                width={300}
                height={169}
                alt="Project 1"
                className="rounded-t-lg object-cover"
                style={{ aspectRatio: "300/169", objectFit: "cover" }}
              />
              <CardContent className="p-4 space-y-2">
                <h3 className="text-lg font-semibold">Project 1</h3>
                <p className="text-muted-foreground dark:text-muted-foreground-dark">
                  A web application that helps users manage their tasks and projects.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  View Project
                </Link>
              </CardContent>
            </Card>
            <Card className="min-w-[250px] flex-shrink-0">
              <img
                src="/placeholder.svg"
                width={300}
                height={169}
                alt="Project 2"
                className="rounded-t-lg object-cover"
                style={{ aspectRatio: "300/169", objectFit: "cover" }}
              />
              <CardContent className="p-4 space-y-2">
                <h3 className="text-lg font-semibold">Project 2</h3>
                <p className="text-muted-foreground dark:text-muted-foreground-dark">
                  A mobile app that helps users track their fitness goals and activities.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  View Project
                </Link>
              </CardContent>
            </Card>
            <Card className="min-w-[250px] flex-shrink-0">
              <img
                src="/placeholder.svg"
                width={300}
                height={169}
                alt="Project 3"
                className="rounded-t-lg object-cover"
                style={{ aspectRatio: "300/169", objectFit: "cover" }}
              />
              <CardContent className="p-4 space-y-2">
                <h3 className="text-lg font-semibold">Project 3</h3>
                <p className="text-muted-foreground dark:text-muted-foreground-dark">
                  A web-based dashboard that provides real-time analytics and insights.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  View Project
                </Link>
              </CardContent>
            </Card>
            <Card className="min-w-[250px] flex-shrink-0">
              <img
                src="/placeholder.svg"
                width={300}
                height={169}
                alt="Project 4"
                className="rounded-t-lg object-cover"
                style={{ aspectRatio: "300/169", objectFit: "cover" }}
              />
              <CardContent className="p-4 space-y-2">
                <h3 className="text-lg font-semibold">Project 4</h3>
                <p className="text-muted-foreground dark:text-muted-foreground-dark">
                  A mobile app that helps users manage their personal finances.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  View Project
                </Link>
              </CardContent>
            </Card>
            <Card className="min-w-[250px] flex-shrink-0">
              <img
                src="/placeholder.svg"
                width={300}
                height={169}
                alt="Project 5"
                className="rounded-t-lg object-cover"
                style={{ aspectRatio: "300/169", objectFit: "cover" }}
              />
              <CardContent className="p-4 space-y-2">
                <h3 className="text-lg font-semibold">Project 5</h3>
                <p className="text-muted-foreground dark:text-muted-foreground-dark">
                  A web application that helps users collaborate on design projects.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  View Project
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-12 dark:bg-muted-dark">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-center">My Curriculum</h2>
          <div className="relative">
            <div className="absolute inset-x-0 h-[2px] bg-muted dark:bg-muted-dark mt-[50px]" />
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
              <div className="relative flex flex-col items-start gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                  2015
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-semibold">Bachelor's Degree</h3>
                  <p className="text-muted-foreground dark:text-muted-foreground-dark">
                    Graduated with a Bachelor's degree in Computer Science from the University of California, Berkeley.
                  </p>
                </div>
              </div>
              <div className="relative flex flex-col items-start gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                  2019
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-semibold">Front-End Developer</h3>
                  <p className="text-muted-foreground dark:text-muted-foreground-dark">
                    Worked as a Front-End Developer at a leading tech company, building responsive and scalable web
                    applications.
                  </p>
                </div>
              </div>
              <div className="relative flex flex-col items-start gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                  2021
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-semibold">Full-Stack Developer</h3>
                  <p className="text-muted-foreground dark:text-muted-foreground-dark">
                    Transitioned to a Full-Stack Developer role, working on building and maintaining complex web
                    applications.
                  </p>
                </div>
              </div>
              <div className="relative flex flex-col items-start gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                  2022
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-semibold">Tech Lead</h3>
                  <p className="text-muted-foreground dark:text-muted-foreground-dark">
                    Promoted to a Tech Lead role, responsible for leading a team of developers and overseeing the
                    development of large-scale projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-muted dark:bg-muted-dark">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-center">My Certificates</h2>
          <div className="flex gap-4 overflow-x-auto pb-4">
            <Card className="min-w-[120px] flex-shrink-0">
              <img
                src="/placeholder.svg"
                width={150}
                height={112}
                alt="Certificate 1"
                className="rounded-t-lg object-cover"
                style={{ aspectRatio: "150/112", objectFit: "cover" }}
              />
            </Card>
            <Card className="min-w-[120px] flex-shrink-0">
              <img
                src="/placeholder.svg"
                width={150}
                height={112}
                alt="Certificate 2"
                className="rounded-t-lg object-cover"
                style={{ aspectRatio: "150/112", objectFit: "cover" }}
              />
            </Card>
            <Card className="min-w-[120px] flex-shrink-0">
              <img
                src="/placeholder.svg"
                width={150}
                height={112}
                alt="Certificate 3"
                className="rounded-t-lg object-cover"
                style={{ aspectRatio: "150/112", objectFit: "cover" }}
              />
            </Card>
            <Card className="min-w-[120px] flex-shrink-0">
              <img
                src="/placeholder.svg"
                width={150}
                height={112}
                alt="Certificate 4"
                className="rounded-t-lg object-cover"
                style={{ aspectRatio: "150/112", objectFit: "cover" }}
              />
            </Card>
            <Card className="min-w-[120px] flex-shrink-0">
              <img
                src="/placeholder.svg"
                width={150}
                height={112}
                alt="Certificate 5"
                className="rounded-t-lg object-cover"
                style={{ aspectRatio: "150/112", objectFit: "cover" }}
              />
            </Card>
            <Card className="min-w-[120px] flex-shrink-0">
              <img
                src="/placeholder.svg"
                width={150}
                height={112}
                alt="Certificate 6"
                className="rounded-t-lg object-cover"
                style={{ aspectRatio: "150/112", objectFit: "cover" }}
              />
            </Card>
            <Card className="min-w-[120px] flex-shrink-0">
              <img
                src="/placeholder.svg"
                width={150}
                height={112}
                alt="Certificate 7"
                className="rounded-t-lg object-cover"
                style={{ aspectRatio: "150/112", objectFit: "cover" }}
              />
            </Card>
            <Card className="min-w-[120px] flex-shrink-0">
              <img
                src="/placeholder.svg"
                width={150}
                height={112}
                alt="Certificate 8"
                className="rounded-t-lg object-cover"
                style={{ aspectRatio: "150/112", objectFit: "cover" }}
              />
            </Card>
            <Card className="min-w-[120px] flex-shrink-0">
              <img
                src="/placeholder.svg"
                width={150}
                height={112}
                alt="Certificate 9"
                className="rounded-t-lg object-cover"
                style={{ aspectRatio: "150/112", objectFit: "cover" }}
              />
            </Card>
            <Card className="min-w-[120px] flex-shrink-0">
              <img
                src="/placeholder.svg"
                width={150}
                height={112}
                alt="Certificate 10"
                className="rounded-t-lg object-cover"
                style={{ aspectRatio: "150/112", objectFit: "cover" }}
              />
            </Card>
          </div>
        </div>
      </section>
      <section className="py-12 dark:bg-muted-dark">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-center">External Links</h2>
          <div className="flex flex-col items-center gap-4">
            <p className="text-muted-foreground dark:text-muted-foreground-dark">Connect with me on these platforms:</p>
            <div className="flex gap-4">
              <Link href="#" className="flex items-center gap-2" prefetch={false}>
                <GithubIcon className="w-6 h-6" />
                GitHub
              </Link>
              <Link href="#" className="flex items-center gap-2" prefetch={false}>
                <LinkedinIcon className="w-6 h-6" />
                LinkedIn
              </Link>
              <Link href="#" className="flex items-center gap-2" prefetch={false}>
                <TwitterIcon className="w-6 h-6" />
                Twitter
              </Link>
              <Link href="#" className="flex items-center gap-2" prefetch={false}>
                <DribbbleIcon className="w-6 h-6" />
                Dribbble
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-muted dark:bg-muted-dark">
        <div className="container">
          <h2 />
        </div>
      </section>
    </div>
  )
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function DribbbleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
      <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
      <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
    </svg>
  )
}


function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}


function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
