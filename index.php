<?php include "includes/header.php"; ?>

<html>
    <body>
        <h2>Content</h2>
        <div class="hero-image">

        </div>
        <div>
        <form action="contact.php" method="post">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit">Send</button>
        </form>
    </div>
    </body>
</html>

<?php include "includes/footer.php"; ?>