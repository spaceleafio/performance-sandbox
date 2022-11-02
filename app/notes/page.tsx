import React from 'react'
import Link from 'next/link'
import PocketBase from 'pocketbase'

async function getNotes() {
  // const db = new PocketBase('http://127.0.0.1:8090');
  // const data = await db.records.getList('notes');
  const res = await fetch(
    'http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30', 
    { 
      cache: 'no-store',
    }
  );

  const data = await res.json()

  return data?.items as any[];
}

async function getUser() {
  const res = await fetch(`${process.env.APP_URL}/api/user`);
  const data = await res.json();
  
  return JSON.stringify(data);
}

export default async function NotesPage() {

  const notes = await getNotes();
  const user = await getUser();

  return (
    <div className='w-full flex flex-col items-center'>
        <h1 className='text-9xl'>Notes</h1>
        <div className=' bg-indigo-900 flex justify-center m-4 w-10/12'>
          {notes?.map((note) => {
            return <Note key={note.id} note={note} />;
          })}
        </div>
        <h1>{user}</h1>
    </div>
  )
}

function Note({ note }: any) {
  const { id, title, content, created } = note || {}; 

  return (
    <Link href={`/notes/${id}`}>
      <div className='p-4 bg-blue-600 m-4 w-52 h-40'>
        <h2>{title}</h2>
        <h5>{content}</h5>
        <p>{created}</p> 
      </div>
    </Link>
  );
}