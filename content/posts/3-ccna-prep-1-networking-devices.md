+++
title = "CCNA Prep: #1 - Networking Devices"
date = "2025-11-09"
tags = ["ccna", "network", "node", "switch", "router", "firewall"]
+++

# Introduction to Networks

First lesson. Foundation stuff. Network devices, clients, servers. Basic but important.

## What Is a Network?

Devices (nodes) that can talk to each other and share stuff. That's it.

Common network devices:

- Router
- Switch
- Firewall
- Server
- Client (End Host)

## Clients and Servers

**Client** - asks for stuff. Your phone opening YouTube = client.

**Server** - gives you stuff. YouTube's servers = server.

A device can be both. PC1 asks PC2 for a file → PC1 is client, PC2 is server. Roles flip depending on who's asking.

Examples:

- Two PCs: PC1 wants `image.jpg` from PC2. PC1 = client, PC2 = server.
- YouTube: Your device = client, YouTube = server.
- AirDrop: Friend's iPhone = server, your iPhone = client.

## Switches

Connect devices within the same LAN. Like a smart power strip.

- Usually 24+ ports
- Connect PCs, printers, servers in one place
- Forward traffic within the same network
- Can't connect to Internet directly (router's job)

Models: Cisco Catalyst 9200, Catalyst 3650

Office setup: computers plug into switch, switch lets PC1 talk to PC2 without Internet.

## Routers

Connect different networks. Office network to Internet, or New York office to Tokyo office.

- Fewer ports than switches
- Connect LANs to each other and Internet
- Figure out best path for data (routing)

Example: NY and Tokyo offices. Each has router → local switch + Internet. Routers send data between offices through Internet.

Models: Cisco ISR 900, ISR 1000, ISR 4000

## Firewalls

Control traffic entering/leaving network based on rules. Like a bouncer.

Where they go:

- Outside router (filter Internet traffic)
- Inside network (filter internal traffic)
- Sometimes both

What they do:

- Watch traffic
- Allow/block based on rules
- Protect against attacks

Types:

1. **Network Firewalls (Hardware)** - Physical devices

   - Cisco ASA 5500-X
   - Cisco Firepower 2100 (Next-Gen)

2. **Host-Based Firewalls (Software)** - On your computer
   - Windows Firewall
   - Protects that device

**Next-Generation Firewalls (NGFW)** - fancy ones with IPS, Deep Packet Inspection, application awareness. Most modern Cisco firewalls are NGFWs.

## How It All Works Together

Typical setup:

- End Hosts: PCs, servers, printers
- Switches: Connect local network
- Routers: Connect networks/Internet
- Firewalls: Keep bad stuff out

Flow: PC1 (Client) → Switch → Router → Internet → Router → Switch → Server1

## Quick Reference

| Thing    | What It Does                                |
| -------- | ------------------------------------------- |
| Network  | Connects devices so they can share stuff    |
| Client   | Asks for services                           |
| Server   | Provides services                           |
| Switch   | Connects devices in the same LAN            |
| Router   | Connects different LANs and the Internet    |
| Firewall | Controls traffic for security               |
| LAN      | Your local network (home/office)            |
| NGFW     | Fancy firewall with extra security features |

## Real World Example

Connect 30 PCs? Use a **switch**.

Connect office network to Internet? Use a **router**.

Protect network? Use a **firewall** (preferably Next-Gen).

Every PC should have software firewall enabled too.
