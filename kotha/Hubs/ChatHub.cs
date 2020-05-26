using kotha.Models;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kotha.Hubs
{
    public class ChatHub:Hub
    {
        public async Task SendMessage(Message message) =>
            await Clients.All.SendAsync("recieveMessage", message);
    }
}
