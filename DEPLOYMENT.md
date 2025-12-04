# Deployment Guide: ChiShiYa on AWS Lightsail (MicroK8s)

This guide assumes you have SSH access to your AWS Lightsail instance (Ubuntu).

## Prerequisites
- AWS Lightsail Instance (2 vCPUs, 2GB RAM minimum)
- Domain `chishiya.xyz` pointing to your instance's Public IP.

## Step 1: Install MicroK8s
Run these commands on your server:

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install MicroK8s
sudo snap install microk8s --classic

# Add user to microk8s group
sudo usermod -a -G microk8s $USER
sudo chown -f -R $USER ~/.kube

# Reload session (or logout and login again)
newgrp microk8s

# Enable necessary addons (minimal set for low RAM)
microk8s enable dns ingress
```

## Step 2: Transfer Files
Copy your project files to the server. You can use `scp` or `git clone`.
Assuming files are in `~/chishiya-web`.

## Step 3: Build Docker Image
Since we are using MicroK8s, we can build the image directly into the MicroK8s registry or import it. The easiest way for a single node is to build locally and import, or build using the `microk8s` prefix if configured, but here we will build with standard docker and save/import.

**Option A: Build on Server (Requires Docker)**
```bash
# Install Docker
sudo apt install docker.io -y
sudo usermod -aG docker $USER
newgrp docker

# Build Image
cd ~/chishiya-web
docker build -t chishiya-web:latest .

# Save and Import to MicroK8s
docker save chishiya-web:latest > chishiya-web.tar
microk8s ctr image import chishiya-web.tar
```

## Step 4: Deploy
Apply the Kubernetes manifests:

```bash
cd ~/chishiya-web
microk8s kubectl apply -f k8s/deployment.yaml
microk8s kubectl apply -f k8s/service.yaml
microk8s kubectl apply -f k8s/ingress.yaml
```

## Step 5: Verify
Check the status of your pods:
```bash
microk8s kubectl get pods
microk8s kubectl get ingress
```

Open `http://chishiya.xyz` in your browser.

## Troubleshooting
- **Pending Pods**: Check resources with `microk8s kubectl describe pod <pod-name>`.
- **Ingress not working**: Ensure port 80/443 are open in Lightsail Networking tab.
