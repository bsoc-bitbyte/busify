import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

const demoData = {
  contractors: [
    {
      id: '1',
      name: 'Sanjay dubey',
      email: 'sanjay@gmail.com',
      phone: '1234567890',
      address: 'Bhopal',
    },
    {
      id: '2',
      name: 'Rahul',
      email: 'rahul@gmail.com',
      phone: '1234567890',
      address: 'Jabalpur',
    },
  ],
  conductor: [
    {
      id: '1',
      name: 'Shubham',
      phone: '1234567890',
    },
    {
      id: '2',
      name: 'Rajesh',
      phone: '0987654321',
    },
  ],
  bus: [
    {
      number: 'MP04-1234',
      conductorId: '1',
      contractorId: '1',
      capacity: 50,
    },
    {
      number: 'MP04-5678',
      conductorId: '2',
      contractorId: '2',
      capacity: 70,
    },
  ],
  schedule: [
    {
      id: '1',
      busNumber: 'MP04-1234',
      from: 'Rewa Residency',
      to: 'Sadar Bazar',
      checkpoints: ['H4', 'Nescafe', 'Railway Station'],
      departureTime: '3:30 PM',
      ticketPrice: 20,
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    },
    {
      id: '2',
      busNumber: 'MP04-5678',
      from: 'Rewa Residency',
      to: 'Sadar Bazar',
      checkpoints: ['H4', 'Nescafe', 'Girls Hostel', 'Reliance Fresh'],
      departureTime: '7:30 PM',
      days: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      ticketPrice: 20,
    },
  ],
};

async function cleanDb() {
  await prisma.schedule.deleteMany({});
  await prisma.bus.deleteMany({});
  await prisma.conductor.deleteMany({});
  await prisma.contractor.deleteMany({});
}

async function seedDb() {
  await cleanDb();
  await Promise.all(
    demoData.contractors.map(async contractor => {
      await prisma.contractor.create({
        data: contractor,
      });
    })
  );
  await Promise.all(
    demoData.conductor.map(async conductor => {
      await prisma.conductor.create({
        data: conductor,
      });
    })
  );
  await Promise.all(
    demoData.bus.map(async bus => {
      await prisma.bus.create({
        data: bus,
      });
    })
  );
  await Promise.all(
    demoData.schedule.map(async schedule => {
      await prisma.schedule.create({
        data: schedule,
      });
    })
  );
  console.log('Seeding done');
  await prisma.$disconnect();
}

seedDb();
