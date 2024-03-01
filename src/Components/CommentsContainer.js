import React from 'react'

const commentData = [
    {
        name : "Siddhart",
        text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, vel?",
        replies : [
            {
                name : "Siddhart",
                text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, vel?",
                replies : []
            },
            {
                name : "Siddhart",
                text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, vel?",
                replies : [ {
                    name : "Siddhart",
                    text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, vel?",
                    replies : [
                        {
                            name : "Siddhart",
                            text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, vel?",
                            replies : []
                        },
                    ]
                },
                {
                    name : "Siddhart",
                    text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, vel?",
                    replies : []
                },]
            },
        ]
    },
    {
        name : "Siddhart",
        text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, vel?",
        replies : [
            {
                name : "Siddhart",
                text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, vel?",
                replies : []
            },
            {
                name : "Siddhart",
                text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, vel?",
                replies : []
            },
             {
        name : "Siddhart",
        text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, vel?",
        replies : []
    },
        ]
    },
    {
        name : "Siddhart",
        text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, vel? bxjhgxsgksxkhxhkgzhkbxhgghsgkhjadlhhfdsifhfbjhbfjogbvhffnoihbhv fdoihbhribgfhpi",
        replies : [ {
            name : "Siddhart",
            text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, vel?",
            replies : [ {
                name : "Siddhart",
                text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, vel?",
                replies : []
            },]
        }, {
            name : "Siddhart",
            text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, vel?",
            replies : []
        }, {
            name : "Siddhart",
            text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, vel?",
            replies : [ {
                name : "Siddhart",
                text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, vel?",
                replies : [ {
                    name : "Siddhart",
                    text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, vel?",
                    replies : []
                },]
            },]
        },]
    },
    {
        name : "Siddhart",
        text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, vel?",
        replies : []
    },
    {
        name : "Siddhart",
        text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, vel?",
        replies : []
    },
    {
        name : "Siddhart",
        text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, vel?",
        replies : []
    },
]

const Comment = ({comment}) =>{
    // console.log(comment.name)
    const {name,text,replies} = comment;
    return (
        <div className='flex flex-row border-l-2'>
          <img className='h-12 w-12' alt="user" src="https://t3.ftcdn.net/jpg/05/53/79/60/240_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"/>
          <div className='ml-4'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
            <CommentList comments={replies}/>
          </div>
          
        </div>
    )
}

const CommentList = ({comments}) => {
    return comments.map((comment) => <Comment comment={comment}/>)
}


const CommentsContainer = () => {
  return (
    <div>
        <h1 className='text-3xl font-bold'>Comments</h1>
        <CommentList comments={commentData} />
    </div>
  )
}

export default CommentsContainer
