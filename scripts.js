
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#contact').addEventListener('submit', function() {
        let name = document.querySelector('#name').value;
        let reply = document.querySelector('#reply');
        if (name.toLowerCase() == "lilian")
        {
            reply.innerHTML = 'Hello, Lilian! Say hi to Gou Gou!';
        }
        else if (name.toLowerCase() == 'abby')
        {
            reply.innerHTML = 'Hello, Fairy! Say hi to Bagel!';
        }
        else if (name.toLowerCase() == 'audrey' || name.toLowerCase() == 'godmummy')
        {
            reply.innerHTML = 'Hello, Godmummy! I miss you!';
        }
        else
        {
            reply.innerHTML = 'Who is ' + name + '? Please write back only when I have made your acquaintance and approved of your presence. Goodbye.';
        }
    });
});