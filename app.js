// Open a database or create one if it doesn't exist
const dbName = "MyDatabase";
const dbVersion = 1;
const request = indexedDB.open(dbName, dbVersion);

// Handle database opening success
request.onsuccess = function (event) {
    const db = event.target.result;
    console.log("Database opened successfully");

    request.onerror = function (event) {
        console.error("Error opening database:", event.target.error);
    };
    request.onupgradeneeded = function (event) {
        const db = event.target.result;
    
        // Create an object store (like a table in a relational database)
        const objectStore = db.createObjectStore("contacts", { keyPath: "id" });
    
        // Define object store indexes if needed
        objectStore.createIndex("name", "name", { unique: false });
    
        console.log("Database upgrade complete");
    };
    function adding() {
        const transaction = db.transaction("contacts", "readwrite");
        const objectStore = transaction.objectStore("contacts");
        const contact = { id: 1, name: "John Doe", email: "john@example.com" };
        var presentValues=localStorage.getItem("contacts")
        presentValues=JSON.parse(presentValues);
        
        console.log(localStorage.getItem("contacts"))
        localStorage.setItem("contacts",JSON.stringify(contact))
        sessionStorage.setItem("contacts",JSON.stringify(contact))
        
        const addRequest = objectStore.add(contact);
        console.log("Called adding")
    }
    adding()
    function fetching() {
        const transaction = db.transaction("contacts", "readonly");
        const objectStore = transaction.objectStore("contacts");
        const getRequest = objectStore.get(1);
    
        getRequest.onsuccess = function (event) {
            const contact = event.target.result;
            console.log("Fetched contact:", contact);

        };
       console.log("Fetching")
    }
    fetching()
    function updating() {
        const transaction = db.transaction("contacts", "readwrite");
        const objectStore = transaction.objectStore("contacts");
        const updateData = { id: 1, name: "Updated Name", email: "updated@example.com" };
        const putRequest = objectStore.put(updateData);
    
    }
    function deleting() {
        const transaction = db.transaction("contacts", "readwrite");
        const objectStore = transaction.objectStore("contacts");
        const deleteRequest = objectStore.delete(1);
        console.log("Deleting")
    
    }
    // deleting()
    function deletingAll() {
        const transaction = db.transaction("contacts", "readwrite");
        const objectStore = transaction.objectStore("contacts");
        const clearRequest = objectStore.clear();
        console.log('Clearing all contacts...');
    }
    deletingAll()
    

};

// Handle database opening error

// Handle database version changes (e.g., for schema upgrades)

