import React from 'react'

import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
 

 
type SliderProps = React.ComponentProps<typeof Slider>
 
export function SliderDemo({ className, ...props }: SliderProps) {
  return (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      className={cn("w-[60%]", className)}
      {...props}
    />
  )
}


export default function UseCases() {


  return (
    <div   style={{
      width: 'calc(100% - 2rem)',
      boxSizing: 'border-box',
      height: "calc(100% - 2rem)",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      padding: '1rem',
      paddingRight: 'calc(1rem - 5px)'
    }}>
      {/* <div style={{
        fontSize: '1.2rem',
        fontWeight: 'bold',

      }}>Uses</div> */}

    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      boxSizing: 'border-box',
      paddingBottom: "0rem",
      height: "100%",
      overflowY: 'auto',
      overflowX: 'hidden',
      width: "100%",
      position: 'relative',
      alignContent: 'center',
      alignItems: 'center',
      justifyItems: 'center',
      paddingRight: '5px',
      marginRight: '-5px',

  }} className="scrollbar">
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        minHeight: '100%',
        display: 'flex',
        width: '100%',
        height: '100%',
        padding: '.5rem 0',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        justifyItems: 'center',
        }}>
          <div style={{
            width: 'calc(100% - 1rem)',
            textAlign: 'justify',
            textJustify: 'inter-word',
            margin: 'auto',
            borderRadius: '5px',
            padding: '1rem',
            backgroundColor: '#0007'
          }}>
      <Accordion type="single" collapsible className="w-full">
        {/* <AccordionItem value="item-1" className="border-whispyblue/10">
          <AccordionTrigger>What can David M Noll LLC offer?</AccordionTrigger>
          <AccordionContent>
            <div style={{
              padding: '1rem 0',
            }}>
              David 
            </div>
          </AccordionContent>
        </AccordionItem> */}
        <AccordionItem value="item-2" className="border-whispyblue/10">
          <AccordionTrigger>Prototyping</AccordionTrigger>
          <AccordionContent>
            <div style={{
              padding: '1rem 0',
            }}>
            If you're exploring something new, I can help you.  I have experience quickly building out new 
            product ideas, both as a solo developer as well as leading a team.  I have experience with a wide range of 
            technologies and domains.  Quickly learning the details of a new domain is one of my strengths, as well as
            taking ownership and delivering the project to fit the purpose, rather than just meet the requirements.
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-whispyblue/10">
          <AccordionTrigger>Troubleshooting</AccordionTrigger>
          <AccordionContent>
            <div style={{
              padding: '1rem 0',
            }}>
              I have a background in IT and experience helping run a shared web hosting service.  I also have a wide 
              range of experience with different programming languages and environments, as well as identifying sources of performance
              issues and other tricky bugs.  This experience may allow me to quickly identify and resolve your issue. 
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="border-whispyblue/10">
          <AccordionTrigger>Back End</AccordionTrigger>
          <AccordionContent>
            <div style={{
              padding: '1rem 0',
            }}>
              I have experience with several backend languages, frameworks, and databases.  From Django and Python to Axum and Rust to Java & Spring Boot, 
              to PHP and Wordpress, I can help with application development. I also have experience doing integrations with machine learning, payment systems 
              and healthcare systems.  I also have some exposure to functional programming languages like Haskell and Scala.
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5" className="border-whispyblue/10">
          <AccordionTrigger>Front End</AccordionTrigger>
          <AccordionContent>
            <div style={{
              padding: '1rem 0',
            }}>
              My first experiences as a developer started with Javascript over years ago.  I have since worked with frameworks like JQuery, React, Vue, 
              and tried out many more, including Angular &lpar;...1&rpar; , Solid.js, Elm, Purescript, etc.  I have experience with CSS, SASS, and Tailwind CSS.
              I have experience with responsive design, animations.  I have also worked with WebRTC, Websockets, and other real-time communication technologies.
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6" className="border-whispyblue/10">
          <AccordionTrigger>Infrastructure</AccordionTrigger>
          <AccordionContent>
            <div style={{
              padding: '1rem 0',
            }}>
            I have worked on infrastructure of all kinds.  Linux servers--mostly Ubuntu--or Windows servers.  I've worked with Docker, Kubernetes, 
            and Terraform. I've work with cloud services like AWS, Azure, and Digital Ocean.  I've also worked with on-premises servers and networks.
            Set up VPN servers, firewalls etc. I've also set up CI/CD pipelines with Gitlab, and Github Actions.
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7" className="border-whispyblue/10">
          <AccordionTrigger>Domain Specific</AccordionTrigger>
          <AccordionContent>
            <div style={{
                padding: '1rem 0',
              }}>
              I've also got some experience with lots of more domain specific technologies including some Android, some Audio & Video
              streaming.  I have done a fair amount of learning Web3 and other Ethereum-based blockchain technologies.  I am also currently 
              learning some CUDA and have done a small amount of Blender scripting in personal projects.  
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8" className="border-whispyblue/10">
          <AccordionTrigger>Management</AccordionTrigger>
          <AccordionContent>
            <div style={{
                padding: '1rem 0',
              }}>
              As a team lead, I have been able to help my team deliver projects quickly and efficiently.  Working with overseas contractors as
              well as full time employees, I've been able to mentor other developers as well. 
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      </div>
      </div>
    </div>

    </div>
  )
}

