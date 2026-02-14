import React from 'react'
import { USER_ICON } from '../utils/contants';

const commentsData = [
     {
        name:"mayank yadav",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ",
        replies: [],
     },
     {
        name:"mayank yadav",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ",
        replies: [
            {
                name:"mayank yadav",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ",
                replies: [],
            },
            {
                name:"mayank yadav",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ",
                replies: [
                    {
                        name:"mayank yadav",
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ",
                        replies: [
                            {
                                name:"mayank yadav",
                                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ",
                                replies: [
                                    {
                                          name:"mayank yadav",
                                          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ",
                                          replies: [],
                                    }
                                ],
                            }
                        ],
                    },
                    
                ],
            },
        ],
     },
     {
        name:"mayank yadav",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ",
        replies: [],
     },
     {
        name:"mayank yadav",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ",
        replies: [],
     },
     {
        name:"mayank yadav",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ",
        replies: [],
     },
]

 const Comment = ({data}) => {

    const {name, text, replies} = data;

    return <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg items-center my-2'>
              <img className='w-12 h-12' src={USER_ICON}
               alt="user" />
              <div>
                <p className='font-bold'>{name}</p>
                <p className=''>{text}</p>
              </div>
          </div>
 };

 const CommentsList = ({comments}) => {
   return comments.map((comment, index) => (
    <div key={index}>  
     <Comment  data={comment} />
       <div className='pl-5 ml-5 border-l-black'>
          <CommentsList  comments={comment.replies} />
       </div>
     </div>
     ))
 }

const CommentContainer = () => {
  return (
    <div className='px-5 py-2'>
        <h1 className='font-bold text-2xl'>Comments :</h1>
        <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentContainer