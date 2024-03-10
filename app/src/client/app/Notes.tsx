// import React, { useState, useEffect } from 'react';
// import { createNote, deleteNote, updateNote, getAllNotesByUser } from 'wasp/client/operations';
// import { Note } from 'wasp/entities';

// export default function NotePage() {
//   const [notes, setNotes] = useState<Note[]>([]);
//   const [isLoadingNotes, setIsLoadingNotes] = useState(false);
//   const [newNoteContent, setNewNoteContent] = useState('');

//   useEffect(() => {
//     fetchNotes();
//   }, []);

//   const fetchNotes = async () => {
//     setIsLoadingNotes(true);
//     try {
//       const fetchedNotes = await getAllNotesByUser();
//       setNotes(fetchedNotes);
//     } catch (error) {
//       console.error('Error fetching notes:', error);
//     } finally {
//       setIsLoadingNotes(false);
//     }
//   };

//   const handleCreateNote = async () => {
//     if (!newNoteContent) return;
//     try {
//       const newNote = await createNote({ content: newNoteContent });
//       setNotes([...notes, newNote]);
//       setNewNoteContent('');
//     } catch (error) {
//       console.error('Error creating note:', error);
//     }
//   };

//   const handleDeleteNote = async (noteId: string) => {
//     try {
//       await deleteNote({ id: noteId });
//       setNotes(notes.filter(note => note.id !== noteId));
//     } catch (error) {
//       console.error('Error deleting note:', error);
//     }
//   };

//   const handleUpdateNote = async (noteId: string, newData: Partial<Note>) => {
//     try {
//       await updateNote({ id: noteId, ...newData });
//       setNotes(notes.map(note => (note.id === noteId ? { ...note, ...newData } : note)));
//     } catch (error) {
//       console.error('Error updating note:', error);
//     }
//   };

//   return (
//     <div className='py-10 lg:mt-10'>
//       <div className='mx-auto max-w-7xl px-6 lg:px-8'>
//         <div className='mx-auto max-w-4xl text-center'>
//           {/* Your JSX content */}
//         </div>
//         <div className='my-8 border rounded-3xl border-gray-900/10 dark:border-gray-100/10'>
//           <div className='sm:w-[90%] md:w-[70%] lg:w-[50%] py-10 px-6 mx-auto my-8 space-y-10'>
//             <div className='flex flex-col gap-3'>
//               <div className='flex items-center justify-between gap-3'>
//                 <input
//                   type='text'
//                   id='content'
//                   className='text-sm text-gray-600 w-full rounded-md border border-gray-200 bg-[#f5f0ff] shadow-md focus:outline-none focus:border-transparent focus:shadow-none duration-200 ease-in-out hover:shadow-none'
//                   placeholder='Enter note content'
//                   value={newNoteContent}
//                   onChange={(e) => setNewNoteContent(e.target.value)}
//                   onKeyDown={(e) => {
//                     if (e.key === 'Enter') {
//                       handleCreateNote();
//                     }
//                   }}
//                 />
//                 <button
//                   type='button'
//                   onClick={handleCreateNote}
//                   className='min-w-[7rem] font-medium text-gray-800/90 bg-yellow-50 shadow-md ring-1 ring-inset ring-slate-200 py-2 px-4 rounded-md hover:bg-yellow-100 duration-200 ease-in-out focus:outline-none focus:shadow-none hover:shadow-none'
//                 >
//                   Add Note
//                 </button>
//               </div>
//             </div>

//             <div className='space-y-10 col-span-full'>
//               {isLoadingNotes && <div>Loading...</div>}
//               {notes.length > 0 ? (
//                 <div className='space-y-4'>
//                   {notes.map(note => (
//                     <NoteComponent
//                       key={note.id}
//                       id={note.id}
//                       content={note.content}
//                       handleDeleteNote={handleDeleteNote}
//                       handleUpdateNote={handleUpdateNote}
//                     />
//                   ))}
//                 </div>
//               ) : (
//                 <div className='text-gray-600 text-center'>Add notes to begin</div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// type NoteProps = Pick<Note, 'id' | 'content'> & {
//   handleDeleteNote: (noteId: string) => void;
//   handleUpdateNote: (noteId: string, newData: Partial<Note>) => void;
// };

// function NoteComponent({
//   id,
//   content,
//   handleDeleteNote,
//   handleUpdateNote,
// }: NoteProps) {
//   // Define your Note component JSX here
// }
