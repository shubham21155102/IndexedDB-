**Motivation and Idea**

- Basically i was working with redux on project where i used localstorage and sessionstorage too much
- Accidently I  opened WhatsApp and opened the application section of developer options
- I found session storage local storage and surprised to see one more thing IndexdDB
- Now I started Exploring
- Many more things to explore

# IndexedDB
**IndexedDB, Local Storage, and Session Storage are three different web storage mechanisms in JavaScript, each with its own purpose, features, and use cases. Here's how they differ:**
 <table>
        <tr>
            <td>

                1. Indexed DB

            </td>
            <td>

                2. Local Storage

            </td>
            <td>

                3. Session Storage

            </td>
            <td>

                4. Web SQL

            </td>
            <td> 5. Cookies</td>
        </tr>
        <tr>
            <td>
                <ul>
                    <li>
                    <b>Type:</b> IndexedDB is a NoSQL database that allows you to store structured data, such as
                        objects or records, in a database.
                    </li>
                    <li><b>Storage Capacity:</b> It provides a larger storage capacity compared to Local Storage and
                        Session
                        Storage. It can store a substantial amount of data, often several megabytes or more.</li>
                    <li><b>Data Structure:</b> You can store complex data structures, including objects, arrays, and
                        even
                        files.</li>
                    <li><b>Querying:</b> IndexedDB supports querying and indexing data, which makes it suitable for
                        applications that require searching and filtering of data.</li>
                    <li><b>Scope:</b> IndexedDB is not tied to a specific window or tab. It is accessible across
                        multiple tabs
                        or windows, making it suitable for sharing data between different instances of a web
                        application.</li>
                    <li> <b>Asynchronous: </b>IndexedDB operations are asynchronous, which means you need to handle
                        callbacks or
                        use Promises to work with data.
                    </li>
                </ul>
            </td>
            <td>
                <ul>
                    <li><b>Type:</b> Local Storage is a simple key-value store that allows you to store string data.
                    </li>
                    <li><b>Storage Capacity:</b> It has a smaller storage capacity compared to IndexedDB and is
                        typically limited to a few megabytes per domain.</li>
                    <li><b>Data Structure:</b>Data is limited to strings. You can store structured data as serialized
                        JSON strings.</li>
                    <li><b>Querying:</b>Local Storage doesn't support querying or indexing, so you need to manage the
                        data structure and retrieval yourself.</li>
                    <li><b>Scope:</b>Data in Local Storage is limited to a single domain and is shared across all tabs
                        and windows of that domain.</li>
                    <li> <b>Synchronous:</b>Local Storage operations are synchronous, making it easier to use for
                        simple key-value storage.
                    </li>
                </ul>
            </td>
            <td>
                <ul>
                    <li><b>Type:</b> Session Storage is similar to Local Storage but is designed for temporary data
                        storage during a browsing session.</li>
                    <li><b>Storage Capacity:</b> Like Local Storage, it has a limited storage capacity, typically a few
                        megabytes per domain.</li>
                    <li><b>Data Structure:</b> It stores data as strings, and structured data can be stored as
                        serialized JSON strings.</li>
                    <li><b>Querying:</b> Session Storage, like Local Storage, doesn't support querying or indexing.</li>
                    <li><b>Scope:</b> Data in Session Storage is also limited to a single domain but is
                        session-specific. It is cleared when the session ends or the browser is closed.</li>
                    <li><b>Synchronous:</b> Session Storage operations are synchronous, making it easier to use for
                        simple key-value storage.</li>
                </ul>
            </td>

            <td>
                <ul>
                    <li><b>Type:</b> Web SQL Database is a SQL-based database system that allows you to execute SQL
                        queries to manipulate data.</li>
                    <li><b>Storage Capacity:</b> Like IndexedDB, Web SQL Database can store a substantial amount of
                        structured data, often several megabytes or more.</li>
                    <li><b>Data Structure:</b> You work with tables and SQL queries, making it suitable for structured
                        data storage.</li>
                    <li><b>Querying:</b> It supports querying and indexing data, allowing for complex data retrieval and
                        manipulation.</li>
                    <li><b>Scope:</b> It is typically limited to a single domain, and it can't be shared across
                        different domains due to the same-origin policy.</li>
                    <li><b>Synchronous and Asynchronous:</b> Web SQL Database supports both synchronous and asynchronous
                        SQL operations, giving developers flexibility in how they interact with the database.</li>
                </ul>
            </td>

            <td>
                <ul>
                    <li><b>Type:</b> Cookies are simple text-based data storage mechanisms. They store key-value pairs
                        as strings.</li>
                    <li><b>Storage Capacity:</b> Cookies have a very limited storage capacity, usually restricted to a
                        few kilobytes per cookie.</li>
                    <li><b>Data Structure:</b> Data in cookies is limited to strings, so you can store simple values
                        like user IDs, preferences, or session tokens.</li>
                    <li><b>Querying:</b> Cookies are not designed for querying or indexing data. Accessing cookie data
                        typically involves iterating through available cookies or knowing the specific cookie name.</li>
                    <li><b>Scope:</b> Cookies are associated with a specific domain and are sent with every HTTP request
                        to that domain, including requests for images, scripts, and styles.</li>
                    <li><b>Persistence:</b> Cookies can have expiration dates, allowing you to create both session
                        cookies (temporary) and persistent cookies (long-lasting).</li>
                </ul>
            </td>

        </tr>
    </table>
