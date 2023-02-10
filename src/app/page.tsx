"use client";
import { Button , Flex , ListItem , UnorderedList , Input , Text } from "@chakra-ui/react";
import { useState } from "react";


export default function Home (){
  const [ task , setTask] = useState(["1","2","3"])
  const [item , setItem] = useState("")

  function removeitem(taskname:string){
     setTask(task.filter((task)=>{
      return task != taskname
     }))
  }


  
  function Additem(){
    if(item != "" && !task.includes(item)){
      const temporary = task;
      temporary.push(item);
      setTask(temporary)
      setItem("")
    }
    
  }
  return(
   <div>
    <h1 className="heading">Todo App</h1>
    <Flex justifyContent={"center"}
    alignItems={"center"}
    height={"100"}
    width={"100"}
    flexDirection={"column"}
    >
      <Input placeholder="Task Name"
      value={item}
      color={"black"}
      onChange={(e)=>{
        setItem(e.target.value)
      }}>
      </Input>
      <Button onClick={Additem}>Add Task</Button>
    </Flex>
      <UnorderedList>
        {
          task.map((t)=>{
            return(
              <ListItem key={t}>
                {t}
                <Button
                ml={"10"}
                background={"black"}
                color={"white"}
                onClick={()=>{
                  return removeitem(t)
                }}
                >
                  Delete
                </Button>
              </ListItem>
            )
          })
        }
      </UnorderedList>
   </div>
  )


}