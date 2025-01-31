import { db } from "./db.js";
import {
  collection,
  addDoc,
  query,
  getDocs,
  setDoc,
  where,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

export async function addStudent(student) {
  console.log("In func");
  console.log(db);

  try {
    const data = {
      id_elev: student.id_elev,
      nume_si_prenume: student.nume_si_prenume,
      cnp: student.cnp,
      email: student.email,
      adresa: student.adresa,
      varsta: student.varsta,
      note: student.note,
      grupa: student.grupa,
    };
    console.log(data);

    await addDoc(collection(db, "elevi"), data);
    console.log("added");
  } catch (error) {
    console.log(`Nu s-a creeat doc : ${error}`);
  }
}

export async function findAll() {
  try {
    const output = [];
    console.log("in findALL");

    const q = query(collection(db, "elevi"));
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
    alert("Imposibil de gasit elevii");
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

export async function update(id, value, column) {
  try {
    try {
      console.log(value);
      const q = query(collection(db, "elevi"), where("id_elev", "==", id));
      console.log(q);
      const q_snapshot = await getDocs(q);
      console.log("Reach");
      if (!q_snapshot.empty) {
        var ids = q_snapshot.docs.map((doc) => doc.id);
        // Afișează ID-urile în consolă

        ids = ids[0];
        console.log("Id docc");
        console.log(ids);
      } else {
        alert("Nu am gasit studentul cu ID ul specificat");
        return;
      }
    } catch {
      return;
    }

    const database = doc(db, "elevi", ids);

    console.log(database);
    alert("Update simplu realizat cu succes")

    const update = {
      [column]: value,
    };

    try {
      await updateDoc(database, update)
        .then(() =>console.log("Se face update ul"))
        .catch((error) => {
          console.error("Error updating document:", error);
          alert("Error during update: " + error.message);
        });
     
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    alert(error);
    console.log("Hy hello", error);
  }
}

export async function addMark(id, indexNota_func, value, column) {
  try {
    try {
      console.log(value);
      console.log("Functie");
      const q = query(collection(db, "elevi"), where("id_elev", "==", id));

      const q_snapshot = await getDocs(q);

      console.log("Reach");
      if (!q_snapshot.empty) {
        console.log(q_snapshot.docs[0].data());
        console.log(q_snapshot.docs[0].id);
        var studentRef = doc(db, "elevi", q_snapshot.docs[0].id);

        var extraxted = q_snapshot.docs[0].data();
      }
    } catch {
      alert("Nu am gasit studentul cu ID ul specificat");
    }

    console.log(column);

    var new_note = extraxted.note[column];
    console.log(Object.values(new_note));
    console.log("h");
    if (Object.keys(new_note).length === 0) {
      console.log("Lungime 0");
      console.log(indexNota_func);
      new_note = new Array(indexNota_func).fill(null);
      console.log(new_note);
      new_note[indexNota_func - 1] = value;
      extraxted.note[column] = new_note;
    } else {
      new_note = Object.values(new_note);

      console.log(new_note);
      for (let i = new_note.length; i < indexNota_func - 1; i++) {
        console.log[i];
        new_note[i] = null;
      }
      new_note[indexNota_func - 1] = value;
      console.log(new_note);

      console.log(`New note : ${new_note}`);
      extraxted.note[column] = new_note;
    }

    await setDoc(studentRef, extraxted);
  } catch (error) {
    console.log("Hy hello", error);
  }
}

export async function purge() {
  const querySnapshot = await getDocs(collection(db, "elevi"));
  const promises = querySnapshot.docs.map((docSnapshot) =>
    deleteDoc(doc(db, "elevi", docSnapshot.id))
  );
  await Promise.all(promises);
  console.log(`Toate documentele din colecția "elevi" au fost șterse.`);
}

export async function deleteElev(id) {
  try {
    try {
      const q = query(collection(db, "elevi"), where("id_elev", "==", id));
      const q_snapshot = await getDocs(q);
      console.log("Reach");

      if (!q_snapshot.empty) {
        var ids = q_snapshot.docs.map((doc) => doc.id);
        // Afișează ID-urile în consolă

        var id_doc = ids[0];
        console.log("Id docc");
        console.log(id_doc);
      }
    } catch {
      alert("Nu am gasit studentul cu ID ul specificat");
    }

    id_doc = id_doc.toString();

    try {
      const database = doc(db, "elevi", id_doc);
      console.log(database);

      await deleteDoc(database);
    } catch {
      console.log("Nooooo");
    }
  } catch (error) {
    console.log("Hy hello", error);
    alert("ID-ul pentru stergere nu a fost gasit");
    return
    
  }
}
