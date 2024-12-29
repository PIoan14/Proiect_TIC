import { db } from "./db.js";
import {
  collection,
  addDoc,
  query,
  getDocs,
  where,
  updateDoc,
  doc,
  deleteDoc
} from "firebase/firestore";

export async function addStudent(student) {
  console.log("In func");

  try {
    const data = {
      id_elev: student.id_elev,
      nume_si_prenume: student.nume_si_prenume,
      cnp: student.cnp,
      email: student.email,
      adresa: student.adresa,
      varsta: student.varsta,
      note: student.note,
    };
    console.log(student)

    await addDoc(collection(db, "elevi"), data);
  } catch {
    console.log("Nu s-a creeat doc");
  }
}

export async function find(coloana, value) {
  try {
    const output = [];
    console.log("in find");
    console.log(coloana);
    console.log(value);
    const q = query(collection(db, "elevi"), where(coloana, "==", value));
    const q_snapshot = await getDocs(q);

    if (q_snapshot.empty) {
      console.log("Empty");
      throw new Error("Nu s-a gasit nici un student");
    }
    q_snapshot.docs.forEach((doc) => {
      output.push(doc.data());
    });

    return output;
  } catch {
    console.log("Not found");
  }
}

export async function update( id, value, column) {
  try {
    try {
      
      console.log(value);
      const q = query(collection(db, "elevi"), where('id_elev', "==", id));
      const q_snapshot = await getDocs(q);
      console.log("Reach");
      if (!q_snapshot.empty) {
        var ids = q_snapshot.docs.map(doc => doc.id);
        // Afișează ID-urile în consolă

        ids = ids[0]
        console.log("Id docc")
        console.log(ids)

        
      } 
    } catch {
      alert("Nu am gasit studentul cu numele ID ul specificat");
    }

    ids = ids.toString()

    const database = doc(db, "elevi", ids);
    console.log(database)
    

    const update = {
      [column]: value,
    };

    await updateDoc(database, update);
  } catch (error) {
    console.log("Hy hello", error);
  }
}

export async function deleteElev( id) {
    try {
      try {
        
        
        const q = query(collection(db, "elevi"), where('id_elev', "==", id));
        const q_snapshot = await getDocs(q);
        console.log("Reach");
        if (!q_snapshot.empty) {
          var ids = q_snapshot.docs.map(doc => doc.id);
          // Afișează ID-urile în consolă
  
          var id_doc = ids[0]
          console.log("Id docc")
          console.log(id_doc)
  
          
        } 
      } catch {
        alert("Nu am gasit studentul cu numele ID ul specificat");
      }
  
      id_doc = id_doc.toString()

      
  
      
      try{
        const database = doc(db, "elevi", id_doc)
        await deleteDoc(database)

    }catch{

        console.log("Nooooo")

    }
    } catch (error) {
      console.log("Hy hello", error);
    }
  }